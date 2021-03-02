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
    let m = time.getMinutes() * 6;
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
