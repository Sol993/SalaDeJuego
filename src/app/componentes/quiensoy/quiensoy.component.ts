import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiensoy',
  templateUrl: './quiensoy.component.html',
  styleUrls: ['./quiensoy.component.css']
})
export class QuiensoyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  githubSol(){
    location.href="https://github.com/Sol993";
    return false;
  }
}
