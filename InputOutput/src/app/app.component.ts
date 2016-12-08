import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name = 'TheOpenopen114'
  public appFormText='';
  public insideOutputText='';

  showText(val:string){
      console.log("appForm func working");
      this.appFormText = val;
  }

  InsideCompOutputText($event){
      console.log("InsideCompOutputText Working");
      console.log("event: :"+$event);
      this.insideOutputText = $event;
  }
}
