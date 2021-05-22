function addZero(i) {
    if(i < 10) {
        i = "0" + i; 
    }
    return i; 
}

var Gettime = (function () {
    var obj = {
        'lagos': [1,0], 
        'sydney': [11,0], 
        'london': [0,0], 
        'tokyo': [9,0], 
    }
    return function (key) {
        var city = obj[key]; 
        return city; 
    }
})(); 

function setUTC() {
    try {
        var city = document.getElementById("selectTime").nodeValue; 
        var date = new Date (); 
        var utcTime = Gettime(city); 
    }
    catch(err) {
        return 
    }

    date.setHours(date.getUTCHours()+ utcTime[0]); 
    date.setMinutes(date.getUTCMinutes() + utcTime[1]); 
    date.setSeconds(date.getUTCSeconds()); 

    var hour = addZero(date.getHours()); 
    var min = addZero(date.getMinutes()); 
    var sec = addZero(date.getSeconds()); 
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById("hr").innerHTML = hour; 
    document.getElementById("min").innerHTML = min; 
    document.getElementById("sec").innerHTML = sec; 
    document.getElementById("fullDate").innerHTML = days[date.getDay()] + ', ' + month[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}

function darkMode() {
    console.log('dark mode worked')
    var element = document.getElementById("container"); 
    element.classList.toggle('dark-mode'); 

    var element = document.getElementById("footer"); 
    element.classList.toggle('dark-mode'); 

    var element = document.body; 
    element.classList.toggle('dark-mode'); 

    var element = document.getElementById("header"); 
    element.classList.toggle('dark-mode'); 
}

setInterval(setUTC,1000); 
