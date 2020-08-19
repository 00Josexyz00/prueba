import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateriaAppointmentPageRoutingModule } from './materia-appointment-routing.module';

import { MateriaAppointmentPage } from './materia-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MateriaAppointmentPageRoutingModule
  ],
  declarations: [MateriaAppointmentPage]
})
export class MateriaAppointmentPageModule {}
