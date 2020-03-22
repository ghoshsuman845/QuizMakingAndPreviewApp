import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewSurveyComponent } from './preview-survey/preview-survey.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';


const routes: Routes = [
  {
    path:'' , redirectTo: '/preview' , pathMatch:'full'
  },
  {
    path:'preview', component:PreviewSurveyComponent
  },
  {
    path:'create', component:CreateSurveyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
