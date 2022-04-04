const showtime = () => {
    let d = new Date();    
    
    let hour = d.getHours()

    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let clock = document.querySelector('.clock');
    let currentTime = `${hour}:${minutes}:${seconds}`;

    const addZero = () => {
        hour = hour < 10 ? "0" + hour : hour;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
    }

    if (hour > 12) {
        hour -= 12
        addZero();
        currentTime = `${hour}:${minutes}:${seconds} PM`;
    } else {
        addZero();
        currentTime += ` AM`
    };

    clock.innerHTML = currentTime;
}

setInterval(showtime, 1000);
showtime();