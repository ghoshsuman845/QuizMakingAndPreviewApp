import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PreviewSurveyComponent } from './preview-survey/preview-survey.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports:      [ BrowserModule,BrowserAnimationsModule,AppRoutingModule,HttpClientModule,FormsModule,MaterialModule,ReactiveFormsModule  ],
  declarations: [ AppComponent,CreateSurveyComponent, PreviewSurveyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
// {"ID":0,"Type":"descriction","Title":"quiz 1","IsDeleted":false,"IsAnonymous":false,"Question":[{"ID":0,"Type":"Single choice","Text":"question 1","options":[{"ID":0,"OptionText":"sq 1","OptionColor":"","hasRemarks":false},{"ID":0,"OptionText":"sq2","OptionColor":"","hasRemarks":false}],"Required":false,"Remarks":"","hasRemarks":true},{"ID":0,"Type":"Multi choice","Text":"question 2","options":[{"ID":0,"OptionText":"hey","OptionColor":"","hasRemarks":false},{"ID":0,"OptionText":"hiii","OptionColor":"","hasRemarks":false}],"Required":false,"Remarks":"","hasRemarks":false}]}