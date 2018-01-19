import React, { Component } from 'react';
import { NavButtonGroup } from '../NavButtonGroup/NavButtonGroup';
import { Chart } from 'chart.js';
import { HEIGHT_BOY_MONTH } from '../../utils/whoDataMetric';
export class ChartsView extends Component {
  render() {
    return (
      <div className="app-Main-ChartsView">
        <NavButtonGroup
          buttonNames={['Height', 'Weight', 'BMI']}
          horizontal={true}
        />
        <ChartContainer>
          <canvas id="chart-ex">
          </canvas>
        </ChartContainer>
      </div>
    )
  }

  componentDidMount = () => {
    var ctx = document.getElementById("chart-ex").getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: new Array(60).map((v, i) => i + ' months'),
        datasets: [{
          type: 'line',
          label: 'Percentile 3',
          data: HEIGHT_BOY_MONTH.p3.slice(0,60)
        }, {
          type: 'line',
          label: 'Percentile 15',
          data: HEIGHT_BOY_MONTH.p15.slice(0,60)
        }]
      },  
      options: {
        spanGaps: true,
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }
    });
    console.log(HEIGHT_BOY_MONTH)
  }

}

const ChartContainer = ({ children }) => {
  return (
    <div className="chart-container" style={{ postion: "relative", 'height': "calc(100% - 20px)", 'width': "calc(100% - 20px)" }}>
      {children}
    </div>
  );
}