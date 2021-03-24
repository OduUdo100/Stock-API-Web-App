
    function displayTime() {
        var currentTime = new Date(); 
        var hours = currentTime.getHours(); 
        var minutes = currentTime.getMinutes(); 
        var seconds = currentTime.getSeconds();

        var meridiem = "AM"; 
        //if hours is greater than 12 
        if(hours > 12) {
            hours = hours - 12; // Convert to 12-hour format
            meridiem = "PM"; // Keep track of the meridiem
        }

        //0 AM and 0 PM should reada as 12
        if(hours == 0) {
            hours = 12; 
        }

        if(hours < 10){
            hours = "0" + hours; 
        }
        if(minutes < 10) {
            minutes = "0" + minutes; 
        }
        if(seconds < 10) {
            seconds = "0" + seconds; 
        }

        var clockDiv = document.getElementById('clock'); //"handle" to the clocl div in the HTML

        //Then set the text inside the clock div
        //to the hours, minutes, and seconds of the current time
        clockDiv.innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridiem;  
    }

    //Runs the displayTime function the first time 
    displayTime(); 

    //Makes clock 'tick' by repeatedly running the displayTime function every second. 
    setInterval(displayTime, 1000); 
