import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  countryList : Country[]=[
    new Country('1', 'India'),
    new Country('2', 'USA'),
    new Country('3', 'England'),
  ];

  onSubmit(form:NgForm){
    console.log(form);
  }

  contact !: Contact;

  ngOnInit():void{
    this.contact = {
      firstName : "",
      lastName : "",
      email : "",
      gender : "",
      status : false,
      country : "",
      address : {
        city :"",
        state : "",
        pincode : 0
      }
    }
  }

}

class Country{
  id:string ;
  name : string;

  constructor(id : string, name: string){
    this.id =id;
    this.name = name;
  }
}

class Contact{
  firstName !: string;
  lastName !: string;
  email !: string;
  gender !: string;
  status !: boolean;
  country !: string;
  address !: {
    city : string;
    state : string;
    pincode : number;
  }
}
