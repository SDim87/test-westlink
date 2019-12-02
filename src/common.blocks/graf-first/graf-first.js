/* eslint-disable no-unused-vars */
import Chart from 'chart.js';

const ctx = document.getElementById('graf-first');
Chart.defaults.global.defaultFontColor = '#000';
Chart.defaults.global.defaultFontColor = '#000';
Chart.defaults.global.defaultFontSize = 9;

const grafFirst = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      label: '# of First',
      data: [12, 19, 3, 5, 29, 3],
      backgroundColor: [
        'transparent',
      ],
      borderColor: [
        'rgba(0, 0, 0, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(0, 0, 0, 1)',
      ],
      borderWidth: 1,
    },
    {
      label: '# of Second',
      data: [25, 18, 16, 10, 21, 12],
      backgroundColor: [
        'transparent',
      ],
      borderColor: [
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
      ],
      borderWidth: 1,
    }],
  },
  options: {
    scales: {
      showLine: true,
      xAxes: [{
        type: 'category',
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  },
});
