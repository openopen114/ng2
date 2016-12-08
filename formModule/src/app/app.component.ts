import { Component, OnInit } from '@angular/core';// add OnInit for implements OnInit 
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
/*
import {FormControl, FormGroup, Validators} from '@angular/forms';
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  userform: FormGroup;

  constructor(private _formBuilder: FormBuilder){

  }


  ngOnInit(){
      // this._formBuilder.group({})
      this.userform = this._formBuilder.group({
          name: ['default', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
          email: [],
          address: this._formBuilder.group({
              street: [],
              city: [],
              postalcode:[null, [Validators.pattern('^[1-9][0-9]{4}$')]]
          })

      })
  }

  /*
  // user form 
  userform  = new FormGroup({
      name: new FormControl('set default name',[Validators.required, Validators.minLength(4), Validators.maxLength(10)] ),
      email: new FormControl('',Validators.required),
      address: new FormGroup({
          street: new FormControl(),
          city: new FormControl(),
          postalcode: new FormControl(null,Validators.pattern('^[1-9][0-9]{4}$'))
      })
  });
  */


  onSubmit(){
      console.log(this.userform.value);
  }

}
