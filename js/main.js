    var mili = 00;
    var seconds = 00;
    var minutes =00;
    var hours = 00;
    var OutputMili = document.getElementById("mili");
    var OutputSeconds = document.getElementById("seconds");
    var OutputMinutes = document.getElementById("minutes");
    var OutputHours = document.getElementById("hours");
    var buttonStart = document.getElementById("btn-start");
    var buttonStop = document.getElementById("btn-stop");
    var buttonReset = document.getElementById("btn-reset");
    var Interval;

    buttonStart.addEventListener('click', () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(Interval);
    });

    buttonReset.addEventListener('click', () => {
        clearInterval(Interval);
        mili = "00";
        seconds = "00";
        minutes = "00";
        hours = "00";
        OutputMili.innerHTML = mili;
        OutputSeconds.innerHTML = seconds;
        OutputMinutes.innerHTML = minutes;
        OutputMinutes.innerHTML = hours;
    });

    function startTimer(){
        mili++;
        if(mili <= 9){
            OutputMili.innerHTML = "0" + mili;
        }

        if(mili > 9){
            OutputMili.innerHTML = mili;
        }

        if(mili > 99){
            seconds++;
            OutputSeconds.innerHTML = "0" + seconds;
            mili = 0;
            OutputMili.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            OutputSeconds.innerHTML = seconds;
        }

        if (seconds > 59){
            minutes++;
            OutputMinutes.innerHTML = "0" + minutes;
            seconds=0;
            OutputSeconds.innerHTML = "0" + 0;
        }

        if(minutes > 9){
            OutputMinutes.innerHTML = minutes;
        }

        if (minutes > 59){
            hours++;
            OutputHours.innerHTML = "0" + hours;
            minutes=0;
            OutputMinutes.innerHTML = "0" + 0;
        }
    }
