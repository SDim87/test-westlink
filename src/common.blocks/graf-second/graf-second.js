/* eslint-disable no-unused-vars */
import Chart from 'chart.js';

const ctx = document.getElementById('graf-second');
Chart.defaults.global.defaultFontColor = '#000';
Chart.defaults.global.defaultFontColor = '#000';
Chart.defaults.global.defaultFontSize = 9;

const frafSecond = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      label: '# of First',
      data: [28, 42, 35, 26, 12, 32],
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
    }],
  },
  options: {
    maintainAspectRatio: false,
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
