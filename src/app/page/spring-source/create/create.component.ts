import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpringSource, SpringSourceService } from '@availa/agube-rest-api';
import { AccountService } from '@availa/auth-fe';
import { NotificationService } from '@availa/notification';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { MapIconType } from 'src/app/components/map/map/configure-map';
import { AddressEmitter } from 'src/app/utils/address/address-emitter';
import { CreateAddress } from 'src/app/utils/address/create-address';
import { build } from 'src/app/utils/coordinates/coordinates-builder';
import { SpringSourceCacheService } from 'src/app/utils/cache/spring-source-cache.service';

@Component({
    selector: 'app-page-spring-source-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
})
export class CreateComponent extends CreateAddress implements OnInit {
    // Variables public
    @Input() public userId: number = -1;
    public springSourceForm: FormGroup | undefined;
    public code = new FormControl('');
    public loadingPost = false;

    constructor(
        private router: Router,
        private svcNotification: NotificationService,
        private svcSpringSource: SpringSourceService,
        private svcSpringSourceCache: SpringSourceCacheService,
        private svcAccount: AccountService,
        private formBuilder: FormBuilder,
        private googleAnalyticsService: GoogleAnalyticsService
    ) {
        super();
        this.googleAnalyticsService.pageView('create_springSource', '/create_springSource');
        this.configureMap.center.type = MapIconType.SPRING_SOURCE;
        // configure address form
        this.addressInputForm = {
            country: new FormControl('', Validators.required),
            state: new FormControl('', Validators.required),
            province: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            village: new FormControl(''),
            municipality: new FormControl('', Validators.required),
            city_district: new FormControl('', Validators.required),
            cp: new FormControl('', Validators.required),
            street: new FormControl(''),
            number: new FormControl(''),
        };

        // configure map height and width
        this.setMapResolution('220px', '500px', '1020px');

        // get user Id to assign the springSource as owner
        this.svcAccount.getUser().subscribe((response) => {
            this.userId = response!.user_id;
        });
    }

    public ngOnInit(): void {
        this.loadCache();
    }

    // Override Address form receive
    public override addressFormReceive(addressEmitter: AddressEmitter) {
        super.addressFormReceive(addressEmitter);
        this.springSourceForm = this.formBuilder.group({
            address: addressEmitter.addressFormGroup,
        });
    }

    // Go to table spring source
    public exit() {
        this.router.navigate(['manager/springsources']);
    }

    // Save
    public save() {
        this.loadingPost = true;

        this.onSave()!.subscribe({
            next: (response) => {
                // reset to load spring-sources
                this.resetCache();
                this.loadingPost = false;
                this.googleAnalyticsService.gtag('event', 'create_spring_source', {
                    springSourceId: response?.id,
                });
            },
            error: (error) => {
                this.svcNotification.warning({ message: error });
                this.loadingPost = false;
                this.googleAnalyticsService.exception('error_spring_source_create', true);
            },
        });
    }

    // call save and go back table spring sources
    public saveAndExit() {
        this.loadingPost = true;

        this.onSave()!.subscribe({
            next: (response) => {
                this.loadingPost = false;
                this.googleAnalyticsService.gtag('event', 'create_spring_source_exit', {
                    springSourceId: response?.id,
                });
                this.exit();
            },
            error: (error) => {
                this.svcNotification.warning({ message: error.message });
                this.loadingPost = false;
                this.googleAnalyticsService.exception('error_spring_source_create_exit', true);
            },
        });
    }

    private onSave() {
        if (!this.springSourceForm || this.springSourceForm.invalid) {
            return;
        }
        let springSource: SpringSource = {
            geolocation: this.getGeolocation(),
        };

        return this.svcSpringSource.createSpringSource(springSource);
    }

    // load cache
    private loadCache() {
        this.svcSpringSourceCache.get().then((response) => {
            if (response && response.length > 0) {
                this.configureMap.otherPoints = response.map((springSource) => build(springSource));
            }
        });
    }
    // reset
    private resetCache() {
        this.loadCache();
    }
}
