const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hr = document.querySelector('.hr');
const second = document.querySelector('.second');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');
setInterval(()=>{
    let time = new Date();
    
    // for analog clock
    let s = time.getSeconds() * 6;
    let m = time.getMinutes() * 6 + (s/60);

    /* 
        1hr = 60 min
        60min = 360deg
        every 60 sec min hand are rotate by 6 deg.
        hour hand rotate by in each sec is 
        => [(total hour hand rotate in 1 hour)/(total min in 1 hour)]
        => 30/60 = 0.5
        so rotation of hour hand is 0.5deg in each 6deg rotation of min hand.
    */
   
    let h = time.getHours() * 30 + ((m/6)*0.5);
    sec.style.transform = `rotate(${s}deg)`;
    min.style.transform = `rotate(${m}deg)`;
    hr.style.transform = `rotate(${h}deg)`;

    // for digital clock
    let seconds = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds(); 
    let minutes = time.getMinutes() < 10 ?  `0${time.getMinutes()}` : time.getMinutes(); 
    let hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours(); 
    second.innerHTML = seconds;
    minute.innerHTML = minutes;
    hour.innerHTML = hours;
})
