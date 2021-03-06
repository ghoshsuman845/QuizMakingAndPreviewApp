import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-preview-survey',
  templateUrl: './preview-survey.component.html',
  styleUrls: ['./preview-survey.component.scss']
})
export class PreviewSurveyComponent implements OnInit {
  quiz: any[] = [];
  getsurveyForm: FormGroup;
  formdetails: any;
  type: any;
  question: any;
  option: any;
 i:number;
  index: any;
  constructor(private api: ApiService) { }
 

  ngOnInit() {
    this.initForm();
    this.api.getQuizData().subscribe(res => {
      console.log(res),
      this.quiz = res.data;
      console.log(this.quiz)
      
      // const quizArray = Object.keys(this.quiz).map(i => this.quiz[i])
      // console.log({quizArray});
      this.question =  res.data[0].Question;
      console.log(this.question);
      console.log(this.question.length);
      
     
      for(let i = 0; i<= this.question.length; i++){
        this.option = this.question[i].options;
        console.log(this.option);
      }
      
      
      
    })
       
  }
  private initForm() {
    let surveyTitle = '';
    let surveyType = '';
    let surveyQuestions = new FormArray([]);
    let options = new FormArray([]);

    this.getsurveyForm = new FormGroup({
      'surveyTitle': new FormControl(surveyTitle, [Validators.required]),
      'surveyType': new FormControl(surveyType, [Validators.required]),
      'surveyQuestions': surveyQuestions,
      'IsAnonymous': new FormControl(false, [Validators.required])
    });


  }
  onSubmit(){

  }
  
}
