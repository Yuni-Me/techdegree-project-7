const trafficCanvas = document.getElementById('web-traffic').getContext('2d');
var trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: '',
            data: [500, 1000, 750, 1250, 1700, 1250, 1000, 1500, 1000, 1500, 1300],
            backgroundColor: [
                'rgba(8, 54, 92, .3)'
            ],
            lineTension: .1,
            borderColor: [
                'rgba(8, 54, 92, .7)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        aspectRatio: 2.5,
        animation: {
            duration: 1500
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});

const dailyCanvas = document.getElementById('daily-traffic').getContext('2d');
var dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            barThickness: 20,
            // data: [{x:'S', y:50}, {x:'M', y:100}],
            data: [50, 80, 150, 100, 200, 180, 80],
            backgroundColor: [
                'rgba(8, 54, 92, .9)',
                'rgba(8, 54, 92, .9)',
                'rgba(8, 54, 92, .9)',
                'rgba(8, 54, 92, .9)',
                'rgba(8, 54, 92, .9)',
                'rgba(8, 54, 92, .9)',
                'rgba(8, 54, 92, .9)'
            ],
            borderWidth: .9
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{ 
                ticks: {
                    beginAtZero: true,
                    
                }
            }]
        },
        legend: {
            display: false
        }

    }
});

const mobileCanvas= document.getElementById('mobile-traffic').getContext('2d');
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            data: [13, 17, 70],
            backgroundColor: [
                '#3e95cd',
                '#3cba9f',
                'rgba(8, 54, 92, .9)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        legend: {
             position: 'right'
         }
    }
});