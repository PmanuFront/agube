import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgubeApiModule } from '@availa/agube-rest-api';
import { ContactBookModule } from '@availa/contact-book-fe';
import { TaskModule } from '@availa/task-fe';
import { environment } from 'src/environments/environment';
import { AgubeRoute } from './agube/agube-route';

import { WorkInProgressComponent } from './components/work-in-progress/work-in-progress.component';

const routes: Routes = [
  { path: AgubeRoute.WIP, component: WorkInProgressComponent },
  {
    path: '',
    canActivate: [],
    loadChildren: () =>
      import('./agube/agube.module').then((m) => m.AgubeModule),
  },

];

@NgModule({
  imports: [
    AgubeApiModule.forRoot({ basePath: environment.agubeBackendUrl }),
    TaskModule.forRoot({
      contactBookRestconfig: {
        basePath: environment.contactBookBackendUrl,
      },
      taskRestconfig: {
        basePath: environment.taskBackendUrl,
      },
    }),

    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
