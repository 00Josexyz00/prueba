import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriaAppointmentPage } from './materia-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: MateriaAppointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriaAppointmentPageRoutingModule {}
