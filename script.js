let coundown = document.querySelector('.time');
let cards = document.querySelectorAll('.event-time');
let button = document.querySelectorAll('button');
let remainTime = document.querySelector('.remain_time');

function event_time() {
    cards.forEach((timeAt, i) => {
        let time = new Date();
        let events = [
            {
                date: time.getDate(),
                hour: time.getHours() + 2,
                min: time.getMinutes() + 5,
                sec: time.getSeconds() + 35,
                am_pm: 'AM'
            },
            {
                date: time.getDate(),
                hour: time.getHours() + 3,
                min: time.getMinutes() + 7,
                sec: time.getSeconds() + 35,
                am_pm: 'AM'
            },
            {
                date: time.getDate() + 2,
                hour: time.getHours() + 2,
                min: time.getMinutes() + 3,
                sec: time.getSeconds() + 35,
                am_pm: 'AM'
            },
            {
                date: time.getDate() + 2,
                hour: time.getHours(),
                min: time.getMinutes() + 5,
                sec: time.getSeconds() + 35,
                am_pm: 'AM'
            },
        ];

        if (events[i].sec > 59) {
            events[i].sec -= 60
            events[i].min += 1
        }
        if (events[i].min > 59) {
            events[i].min -= 60
            events[i].hour += 1
        }
        if ((events[i].hour + 1) > 11 && (events[i].hour + 1) <= 23) {
            events[i].am_pm = 'PM'
        }
        if (events[i].hour > 12) {
            events[i].hour -= 12
        }

        events[i].hour = events[i].hour.toString().padStart(2, "0");
        events[i].min = events[i].min.toString().padStart(2, "0");
        events[i].sec = events[i].sec.toString().padStart(2, "0");

        timeAt.innerHTML = (`${events[i].hour}:${events[i].min}  ${events[i].am_pm}`)
    });
}

event_time();
setInterval(event_time, 3600000);

function count(e_hour, e_min, e_sec) {
    let time = new Date();

    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (sec > 59) {
        sec -= 60
        min += 1
    }
    if (min > 59) {
        min -= 60
        hour += 1
    }
    if (hour > 12) {
        hour -= 12
    }

    let hour_left = e_hour - hour
    let min_left = e_min - min
    let sec_left = e_sec - sec

    if (sec_left < 0) {
        sec_left += 60
        min_left -= 1
    }
    if (min_left < 0) {
        min_left += 60
        hour_left -= 1
    }

    hour_left = hour_left.toString().padStart(2, '0');
    min_left = min_left.toString().padStart(2, '0');
    sec_left = sec_left.toString().padStart(2, '0');

    remainTime.innerHTML = `Time left: ${hour_left} : ${min_left} : ${sec_left}`;
};

button.forEach((btn) => {
    btn.addEventListener('click', (btn_id) => {
        if (btn_id.target.id == 'c1-btn') {
            coundown.innerHTML = `Event Time: ${cards[0].innerHTML}`;
            let e_hour = cards[0].innerHTML.slice(0, 2);
            let e_min = cards[0].innerHTML.slice(3, 5);
            let e_sec = 35;
            setInterval(function () { count(e_hour, e_min, e_sec), 1000 })
        }
        else if (btn_id.target.id == 'c2-btn') {
            coundown.innerHTML = `Event Time: ${cards[1].innerHTML}`;
            let e_hour = cards[1].innerHTML.slice(0, 2);
            let e_min = cards[1].innerHTML.slice(3, 5);
            let e_sec = 25;
            setInterval(function () { count(e_hour, e_min, e_sec), 1000 });
        }
        else if (btn_id.target.id == 'c3-btn') {
            coundown.innerHTML = `Event Time: ${cards[2].innerHTML}`;
            let e_hour = cards[2].innerHTML.slice(0, 2);
            let e_min = cards[2].innerHTML.slice(3, 5);
            let e_sec = 45;
            setInterval(function () { count(e_hour, e_min, e_sec), 1000 });
        }
        else if (btn_id.target.id == 'c4-btn') {
            coundown.innerHTML = `Event Time: ${cards[3].innerHTML}`;
            let e_hour = cards[3].innerHTML.slice(0, 2);
            let e_min = cards[3].innerHTML.slice(3, 5);
            let e_sec = 55;
            setInterval(function () { count(e_hour, e_min, e_sec), 1000 });
        }
    });
});