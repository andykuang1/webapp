function updateClock() {
    let date = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //formatting
    let seconds = date.getSeconds() < 10 ? ":0" + date.getSeconds() : ":" + date.getSeconds();
    let minutes = date.getMinutes() < 10 ? ":0" + date.getMinutes() : ":" + date.getMinutes();
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let time = hours + minutes + seconds;

    date = [months[date.getMonth()], date.getDate() + ",", date.getFullYear()].join(' ');

    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = time + " PST/PDT";
}
setInterval(updateClock, 1000);