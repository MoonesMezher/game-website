function $(value) {
    return document.querySelector(value);
}

let button = $(".click");
let menu = $(".megamenu");
let day = $(".day");
let hour = $(".hour");
let minute = $(".minute");
let second = $(".second");

button.onclick = function () {
    if(menu.classList.contains("none")) {
        menu.classList.remove("none");
    } else {
        menu.classList.add("none");
    }
}
// let eventDate = new Date("Dec 31, 2023 23:59:59").getTime();

// let counter = setInterval(()=> {
//     let nowDate = new Date().getTime();

//     let diffrenceDate = (eventDate - nowDate);

//     day.innerHTML = Math.floor(diffrenceDate/(1000*60*60*24));
//     hour.innerHTML = Math.floor((diffrenceDate%(1000*60*60*24))/(1000*60*60));
//     minute.innerHTML = Math.floor((diffrenceDate%(1000*60*60))/(1000*60));
//     second.innerHTML = Math.floor((diffrenceDate%(1000*60))/(1000));
    
//     if(diffrenceDate < 0) {
//         clearInterval(counter);
//     }
// }, 1000);
// setInterval(() => {
//     let count = (+day.innerHTML*24*3600)+(+hour.innerHTML*3600)+(+minute.innerHTML*60)+(+second.innerHTML);
//     count--;
//     day.innerHTML = Math.floor(count/(24*3600));
//     hour.innerHTML = Math.floor((count%(24*3600))/(3600));
//     minute.innerHTML = Math.floor((count%(3600))/60);
//     second.innerHTML = Math.floor(count%60);
// }, 1000);

