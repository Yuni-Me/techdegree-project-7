
// =================================================
//      Traffic Chart
// =================================================

const trafficCanvas = document.getElementById('web-traffic');


let trafficData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [500, 1000, 750, 1250, 1700, 1250, 1000, 1500, 1000, 1500, 1300],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        lineTension: .2,
        borderColor: [
            'rgba(8, 54, 92, .7)'
        ],
        borderWidth: 1
    }]
};
let trafficOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
            }
        }]
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});
function updateChart(option) {
    const trafficNavs = document.querySelector('.traffic-nav').children;

    for (let i = 0; i < trafficNavs.length; i++) {
        if (trafficNavs[i].id === 'chosen-2') {
            trafficNavs[i].id = '';
        }
        
    }
    
    if (option === 'Hourly') {
        trafficChart.data.datasets[0].data = [25, 30, 15, 35, 20, 45, 20, 15, 35, 15, 20];
        trafficChart.data.labels = ['10am', '11m', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
        trafficNavs[0].id = 'chosen-2';
    } else if (option === 'Daily') {
        trafficChart.data.datasets[0].data = [220, 350, 300, 150, 250, 450, 300, 250, 400, 350, 200];
        trafficChart.data.labels = ['Wed', 'Thu', 'Friday', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Friday', 'Sat'];  
        trafficNavs[1].id = 'chosen-2';
    } else if (option === 'Weekly') {
        trafficChart.data.datasets[0].data = [500, 1000, 750, 1250, 1700, 1250, 1000, 1500, 1000, 1500, 1300];
        trafficChart.data.labels = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];  
        trafficNavs[2].id = 'chosen-2';
    } else if (option === 'Monthly') {
        trafficChart.data.datasets[0].data = [2500, 3000, 1500, 3500, 2000, 4500, 2000, 1500, 3500, 1500, 2000];
        trafficChart.data.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];  
        trafficNavs[3].id = 'chosen-2';
    }
        
        trafficChart.update();
}


const navIcons = document.querySelector('#aside');
navIcons.addEventListener( 'click', (e) => {
    let eIcon = e.target;
   
    if (eIcon) {
        for (let i = 0; i < navIcons.children.length; i++) {
            if (navIcons.children[i].id === 'chosen') {
                navIcons.children[i].id = '';
            }
        }
        
    }
    eIcon.parentNode.parentNode.id = 'chosen';

});


// =================================================
//      Daily Chart
// =================================================

const dailyCanvas = document.getElementById('daily-traffic');
const dailyData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        label: '# of Hits',
        barThickness: 35,
        data: [50, 80, 150, 100, 200, 180, 80],
        backgroundColor: '#7477BF',
        borderWidth: .9
    }]
};
const dailyOptions = {
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

};
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// =================================================
//      Mobile Chart
// =================================================

const mobileCanvas = document.getElementById('mobile-traffic');
const mobileData = {
    labels: ['Phones', 'Tablets', 'Desktop'],
    datasets: [{
        label: '# of Users',
        data: [500, 550, 2000],
        backgroundColor: [
            '#51B6C8',
            '#78CF82',
            '#7477BF',
        ],
        borderWidth: 0
    }]
};
const mobileOptions = {
    responsive: true,
    legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
};
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});







// =================================================
//      Event Listeners
// =================================================
const alertX = document.querySelector('#alert-x');
const alert = document.querySelector('#alert');
const alertComment = document.getElementById('alert-comment');
alertComment.innerHTML = `You have <strong>6</strong> overdue tasks to complete`;
alertX.addEventListener('click', (e) => {
    if (e.target.id === 'alert-x') {
        alert.style.display = 'none';
    }
  
});

const user = document.getElementById("search-user");
const message = document.getElementById("message-area");
let send = document.getElementById("message-btn");  

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
        window.alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
        window.alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
        window.alert("Please fill out message field before sending");
    } else {
        window.alert(`Message successfully sent to: ${user.value}`);
        user.value = '';
        message.value = '';
        
        
    }

});


