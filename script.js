let coundown = document.querySelector('.box');
let time = new Date();
let events = [
    {
        date: time.getDate(),
        hour: time.getHours() + 2,
        min: time.getMinutes() + 40,
        sec: time.getSeconds() + 20,
    },
    {
        date: time.getDate(),
        hour: time.getHours() - 4,
        min: time.getMinutes() + 25,
        sec: time.getSeconds() + 10,
    },
    {
        date: time.getDate() + 2,
        hour: time.getHours() + 2,
        min: time.getMinutes() + 50,
        sec: time.getSeconds() + 30,
    },
    {
        date: time.getDate() + 2,
        hour: time.getHours() + 4,
        min: time.getMinutes() + 35,
        sec: time.getSeconds() + 20,
    },
];


let cards = document.querySelectorAll('.event-time');

cards.forEach((time, i) => {
    // console.log(`day: ${event.date}, hour: ${event.hour}`)
    time.innerHTML = (`${events[i].hour}:${events[i].min} - ${events[i].hour + 1}:${events[i].min + 1}`)
});

// for (let i = 0; i < events.length; i++) {
//     // cards.innerHTML = (`${events[i].hour}:${events[i].min} - ${events[i].hour + 1}:${events[i].min + 1}`)
//     console.log(`${events[i].hour}:${events[i].min} - ${events[i].hour + 1}:${events[i].min + 1}`)
    
// }
// console.log(time.getDate());

function count() {
    

}