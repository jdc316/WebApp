import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly.js';

declare var jquery:any; //these are required for scrollspy to work
declare var $ :any;

@Component({
  selector: 'app-model-display',
  templateUrl: './model-display.component.html',
  styleUrls: ['./model-display.component.css']
})
export class ModelDisplayComponent implements OnInit {

  constructor() { }

  //There is alot in here. May need to move it to a seperate function at a later time
  ngOnInit() { 
    this.triggerGraph();
    this.sideBarInit();

  }

sideBarInit()
{
  $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
        this.graphResize();
    });
  });
}

graphResize()
{
  var offsetHeight = document.getElementById('tester').offsetHeight;
        var offsetWidth = document.getElementById('tester').offsetWidth;
        var update = {
          width: offsetWidth,
          height: offsetHeight
        };
        Plotly.relayout('tester', update);
}

triggerGraph()
{
  Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
  }


var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL High',
  x: unpack(rows, 'Date'),          //the name of the csv column to set as the x-axis
  y: unpack(rows, 'AAPL.High'),     //the name of the csv column to set as the y-axis
  line: {shape: 'spline', color: '#17BECF', smoothing: 1}
  }

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL Low',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'AAPL.Low'),
  line: {shape: 'spline', color: '#7F7F7F', smoothing: 1} //shape must be set to spline in order for smoothing to work
  }

var data = [trace1,trace2];

var layout = {
  title: 'Sample From CSV',
  };

Plotly.newPlot('tester', data, layout, {responsive: true});
})

}

}





