import { AddressModule } from './contact-info/address/address.module';
import { PhonesModule } from './contact-info/phones/phones.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientConfigPageRoutingModule } from './client-page-routing.module';
import { ClientPageComponent } from './client-page.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NotificationModule } from '@availa/notification';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PasswordComponent } from './password/password.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslateModule } from '@ngx-translate/core';
import { ConfigureModeComponent } from './configure-mode/configure-mode.component';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    ClientPageComponent,
    PersonalInfoComponent,
    ContactInfoComponent,
    PasswordComponent,
    ConfigureModeComponent,
  ],
  imports: [
    CommonModule,
    ClientConfigPageRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    NotificationModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    PhonesModule,
    AddressModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSelectModule,
    MatMenuModule,
    MatSlideToggleModule,
    TranslateModule
  ],
  providers:[]
})
export class ClientPageModule {}
