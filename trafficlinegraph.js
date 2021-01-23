let chartArea = document.getElementById('myChart');

let timingTraffic = [{
    labels: ['0-4', '5-8', '9-12', '13-17', '18-21', '22-24'],
    label: ['Hourly Site Traffic'],
    data: [13, 24, 15, 22, 17, 14, 18]
},

{
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    label: ['Daily Site Traffic'],
    data: [75, 145, 95, 132, 102, 89, 112]
},

{
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    label: ['Weekly Site Traffic'],
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500]
},

{
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    label: ['Monthly Site Traffic'],
    data: [5000, 6350, 5100, 5550, 5250, 6550, 6750, 4800, 4950, 5850, 6750, 5650]
},

];

let myChart = new Chart(chartArea, {
    type: 'line', // Types of charts: line, bar, radar, doughnut & pie, polar area, bubble, scatter
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'Weekly Site Traffic',
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
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
        
        legend: {
            display: false,
                
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                    }
                }]
            }
    }}
})


function updateChart(arr, index) {
    myChart.data.datasets[0].data = arr[index].data
    myChart.data.datasets[0].label = arr[index].label
    myChart.data.labels = arr[index].labels
    myChart.update();
}

// Weekly & Daily, Monthly, need to replace above data / labels based on button clicks

// 107 per day
// Chart labels would be 'S', 'M', 'T', 'W', 'T', 'F', 'S'
// data array would be 75, 145, 95, 132, 102, 89, 112



// Hourly
// Chart Labels be 0-4, 5-8, 9-12, 13-17, 18-21, 22-24
// data array would be: 13, 24, 15, 22, 17, 14, 18

// Monthly
// Chart labels be: 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
// data array would be: 5000, 6850, 5100, 8100, 5250, 7000, 6750, 4300, 8550, 5850, 6750, 7250
