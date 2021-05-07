import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'apiaux/subscription-rest-api-lib/src/lib/service/client.service';
import { PaymentTypesService } from 'apiaux/subscription-rest-api-lib/src/lib/service/paymentTypes.service';
import { authEnumPaths } from '../../auth/auth-enum-paths';
import {
  PaymentType,
  SubscriptionService,
} from 'apiaux/subscription-rest-api-lib/src/public-api';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss'],
})
export class CreateAccountFormComponent implements OnInit {
  public registerForm: FormGroup;
  public formIdentification: number;
  public payType: string;
  public typePay: PaymentType[];
  public subscriptions: any;
  public selectedList = false;
  public error = false;
  public errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly subscriptionclientService: ClientService,
    private readonly svcSubscriptionService: SubscriptionService,
    private readonly paymentTypesService: PaymentTypesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.formIdentification = params.id;
    });

    this.paymentTypesService.getPaymentTypes().subscribe((value) => {
      this.typePay = value;
    });

    this.svcSubscriptionService.getSubscriptions().subscribe((subs) => {
      this.subscriptions = subs;
    });
  }

  public ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      nif: ['', [Validators.required]],
      business_name: ['', Validators.required],
      phone_number: ['', Validators.required],
      payment_type: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line: typedef
  get f() {
    return this.registerForm.controls;
  }

  public sendPayUrl(id: string): any {
    this.paymentTypesService.getPaymentTypes().subscribe((typePay) => {
      typePay.forEach((type) => {
        if (type.description === id) {
          this.payType = type.id;
        }
      });
    });
  }
  public onSubmit(): void {

    this.subscriptionclientService
      .createDwellingWithResident({
        client: {
          user: {
            username: this.registerForm.value.username,
            first_name: this.registerForm.value.firstName,
            last_name: this.registerForm.value.lastName,
            email: this.registerForm.value.email,
          },
          nif: this.registerForm.value.nif,
          business_name: this.registerForm.value.business_name,
          phone_number: this.registerForm.value.phone_number,
          payment_type: 1,
        },
        subscription: this.formIdentification,
      })
      .subscribe(
        (value) => {
          this.router.navigate([authEnumPaths.LOGIN]);
        },
        (error) => {
          this.error = true;
          this.errorMessage = error.statusText;
        }
      );
  }
}
