import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  itemcounter : number;
  projecttext : string="";
  projects=[];

  constructor() { }

  ngOnInit(): void {
    this.itemcounter=this.projects.length;
  }

  additem()
  {
    this.projects.push(this.projecttext);
    this.projecttext='';
    this.itemcounter=this.projects.length;
  }
  removeitem(i){
    this.projects.splice(i,1);
    this.itemcounter=this.projects.length;
  }
}
