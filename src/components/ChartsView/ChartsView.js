import React, { Component } from 'react';
import { NavButtonGroup } from '../NavButtonGroup/NavButtonGroup';
import { Chart } from 'chart.js';
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
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        spanGaps: true,        
        responsive : true,
        maintainAspectRatio : true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}

const ChartContainer = ({ children }) => {
  return (
    <div className="chart-container" style={{postion:"relative",'height':"calc(100% - 20px)",'width':"calc(100% - 20px)"}}>
      {children}
    </div>
  );
}