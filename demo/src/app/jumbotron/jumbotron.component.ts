import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  jumboText;
  constructor() {

      this.jumboText = "Hello jumbo Text"

  }

  ngOnInit() {
  }

}
