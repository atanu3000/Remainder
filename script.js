let cards = document.querySelectorAll('.event-time');
let button = document.querySelectorAll('button');
let countdown = document.querySelectorAll('.time');
let remainTime = document.querySelectorAll('.remain_time');

function event_time() {
    cards.forEach((timeAt, i) => {
        let time = new Date();
        let events = [
            {
                date: time.getDate(),
                // hour: time.getHours() + 2,
                hour: 0,
                min: time.getMinutes() + 5,
                sec: time.getSeconds() + 35,
                am_pm: 'AM'
            },
            {
                date: time.getDate(),
                hour: time.getHours() + 4,
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
        if ((events[i].hour ) > 11 && (events[i].hour ) <= 23) {
            events[i].am_pm = 'PM'
        }
        if(events[i].hour >= 24) {
            events[i].hour -= 24
        }
        if(events[i].hour == 0 && events[i].min >= 0 && events[i].min <= 59){
            events[i].hour += 12
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

function count(e_hour, e_min, e_sec, c_no, am_pm) {
    let time = new Date();

    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    
    // let hour_left = (am_pm == 'PM') ? parseInt(e_hour - hour) + 12 : (e_hour - hour);
    let hour_left = (e_hour - hour);

    if (am_pm == "PM") {
        hour_left = parseInt(e_hour - hour) + 12;
    }

    
    let min_left = e_min - min;
    let sec_left = e_sec - sec;

    if (sec_left < 0) {
        sec_left += 60
        min_left -= 1
    }
    if (min_left < 0) {
        min_left += 60
        hour_left -= 1
    }
    if (hour > 12) {
        hour -= 12
    }

    hour_left = hour_left.toString().padStart(2, '0');
    min_left = min_left.toString().padStart(2, '0');
    sec_left = sec_left.toString().padStart(2, '0');

    remainTime[c_no].innerHTML = `Event Starts in: ${hour_left} : ${min_left} : ${sec_left}`;
    remainTime[c_no].style.color = 'yellow';
};

let event1 = document.querySelector('#e1');
let event2 = document.querySelector('#e2');
let event3 = document.querySelector('#e3');
let event4 = document.querySelector('#e4');

button.forEach((btn, i) => {
    btn.addEventListener('click', (btn_id) => {
        if (btn_id.target.id == 'c1-btn') {
            countdown[i].innerHTML = `Event Time: ${cards[0].innerHTML}`;
            let e_hour = cards[0].innerHTML.slice(0, 2);
            let e_min = cards[0].innerHTML.slice(3, 5);
            let am_pm = cards[0].innerHTML.slice(-2);
            let e_sec = 35;
            setInterval(function () { count(e_hour, e_min, e_sec, 0, am_pm);}, 1000 );
            event1.style.display = 'block';
            event2.style.display = 'none';
            event3.style.display = 'none';
            event4.style.display = 'none';
        }
        else if (btn_id.target.id == 'c2-btn') {
            countdown[i].innerHTML = `Event Time: ${cards[1].innerHTML}`;
            let e_hour = cards[1].innerHTML.slice(0, 2);
            let e_min = cards[1].innerHTML.slice(3, 5);
            let am_pm = cards[1].innerHTML.slice(-2);
            let e_sec = 25;
            setInterval(function () { count(e_hour, e_min, e_sec, 1, am_pm);}, 1000 );
            event1.style.display = 'none';
            event2.style.display = 'block';
            event3.style.display = 'none';
            event4.style.display = 'none';
        }
        else if (btn_id.target.id == 'c3-btn') {
            countdown[i].innerHTML = `Event Time: ${cards[2].innerHTML}`;
            let e_hour = cards[2].innerHTML.slice(0, 2);
            let e_min = cards[2].innerHTML.slice(3, 5);
            let am_pm = cards[2].innerHTML.slice(-2);
            let e_sec = 45;
            setInterval(function () { count(e_hour, e_min, e_sec, 2, am_pm);}, 1000 );
            event1.style.display = 'none';
            event2.style.display = 'none';
            event3.style.display = 'block';
            event4.style.display = 'none';
        }
        else if (btn_id.target.id == 'c4-btn') {
            countdown[i].innerHTML = `Event Time: ${cards[3].innerHTML}`;
            let e_hour = cards[3].innerHTML.slice(0, 2);
            let e_min = cards[3].innerHTML.slice(3, 5);
            let am_pm = cards[3].innerHTML.slice(-2);
            let e_sec = 55;
            setInterval(function () { count(e_hour, e_min, e_sec, 3, am_pm);}, 1000 );
            event1.style.display = 'none';
            event2.style.display = 'none';
            event3.style.display = 'none';
            event4.style.display = 'block';
        }
    });
});