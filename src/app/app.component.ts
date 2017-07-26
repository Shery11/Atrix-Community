import { Component } from '@angular/core';
import {DataService} from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
     trigger('myAnimation',[
           state('small',style({
           	transform: 'scale(1)',
           })),
           state('large',style({
           	transform: 'scale(1.2)',
           })),

           transition('small <=> large',animate('300ms ease-in')),
     	]),
  ]
})
export class AppComponent {


	state:string ="small"

	animateMe(){
		this.state = (this.state === 'small' ? 'large' : 'small');
	}
   
   title = 'app';

   myArr = ['i','we','you','they'];

    constructor(private dataService:DataService){

    }
    
     property:String ="";

     ngOnInit(){
     	console.log(this.dataService.cars);
     	this.property = this.dataService.myData();
     }

    myEvent(event){

   	console.log("clicked");

   }
}
