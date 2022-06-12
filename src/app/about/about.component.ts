import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit,OnChanges{
  @Input()'isDarkThem': boolean=false
isdm:boolean=false
  constructor() { }
  ngOnChanges() {
    this.isdm=this.isDarkThem
    console.log(this.isdm);
  }


  ngOnInit(): void {

  }

}
