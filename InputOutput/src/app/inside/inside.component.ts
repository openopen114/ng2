import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.css']
})
export class InsideComponent implements OnInit {
    public insideText = '';

    @Input()
    public inputText='';



    @Output()
    emitSpot = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }


  showText(val: string){
      this.insideText = val;
  }


  outputTest2App(val: string){
      console.log("outputTest2App func working")
      this.emitSpot.emit(val)
  }

}
