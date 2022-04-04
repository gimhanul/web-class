const watch = document.getElementById("watch");

window.onload = function () {
    clock();
}

function clock() {
    let today = new Date();
    let todayHour = today.getHours();
    let todayMinute = today.getMinutes();
    let todaySecond = today.getSeconds();
    let ampm = todayHour > 12 ? "PM" : "AM";

    if (todayHour < 10) todayHour = '0' + todayHour;
    if (todayMinute < 10) todayMinute = '0' + todayMinute;
    if (todaySecond < 10) todaySecond = '0' + todaySecond;

    watch.innerHTML =  `${ampm} ${todayHour}:${todayMinute}:${todaySecond}`;
    window.setInterval('clock()', 1000)
}