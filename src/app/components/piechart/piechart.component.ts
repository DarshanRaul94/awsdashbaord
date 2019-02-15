import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html'
  
})
export class PiechartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    let chart = new CanvasJS.Chart("chartContainer", {

		theme: "light2",
		animationEnabled: false,
		exportEnabled: false,
		
		data: [{
			type: "pie",
			showInLegend: false,
			toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
			dataPoints: [
				{ y: 450, name: "Food" },
				{ y: 120, name: "Insurance" },
				{ y: 300, name: "Traveling" },
				{ y: 800, name: "Housing" },
				{ y: 150, name: "Education" },
				{ y: 150, name: "Shopping"},
				{ y: 250, name: "Others" }
			]
		}]
	});
		
	chart.render();

  }

}