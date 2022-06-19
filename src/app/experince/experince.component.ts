import { Component, OnInit } from '@angular/core';
import { single } from '../interfaces/ngxData';
import { other } from '../interfaces/other';
import { Color, ScaleType } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-experince',
  templateUrl: './experince.component.html',
  styleUrls: ['./experince.component.scss']
})
export class ExperinceComponent implements OnInit {
  gauge = [
    {id: 1, gaugeValue:85, gaugeLabel:'Smart', gaugeAppendText:' %'},
    {id: 2, gaugeValue:95, gaugeLabel:'Work', gaugeAppendText:' %'},
    {id: 3, gaugeValue:80, gaugeLabel:'Leader', gaugeAppendText:' %'},
    {id: 4, gaugeValue:90, gaugeLabel:'Support', gaugeAppendText:' %'},
    {id: 4, gaugeValue:80, gaugeLabel:'social', gaugeAppendText:' %'},
    {id: 4, gaugeValue:92, gaugeLabel:'competitor', gaugeAppendText:' %'},


];
    gaugeValue = 28.3;
  gaugeLabel = "Speed";
  gaugeAppendText = "km/hr";
  backgroundColor= '#138d8d'
  fgc='#00c8c8'
  thick= 8
  cap="round"
  // thresholdConfig = {
  //   '0': {color: 'green'},
  //   '40': {color: 'orange'},
  //   '75.5': {color: 'red'}}


  single: any[]=[];
  other: any[]=[];
  view: any[] = [700, 400];

  // options skills
  showXAxis: boolean = false;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  yAxisLabel: string = '';
  showYAxisLabel: boolean = false;
  xAxisLabel: string = '';
  legendPosition:any = 'below';
  cardColor: string = '#232837';
  colorScheme: Color = { domain: ['#607D8B','#006064', '#00796B', '#00ACC1', '#26A69A','#00BFA5','#0288D1'], group: ScaleType.Ordinal, selectable: true, name: '', };
  colorSchemep = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor() {
    Object.assign(this, { single });
    Object.assign(this, { other });

  }

  ngOnInit(): void {

  }

}
