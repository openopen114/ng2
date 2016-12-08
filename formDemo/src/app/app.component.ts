import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  myName = "openopen114";
  myEmail = "openopen114@gmail.com";


  onSubmit(value: any){
      console.log("onSubmit works!");
      console.log(value);
  }

  printStreetVal(value: any){
      console.log("printStreetVal works");
      console.log(value);
  }
}
