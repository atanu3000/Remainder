let coundown = document.querySelector('.time');
let cards = document.querySelectorAll('.event-time');
// let btn1 = document.querySelector('#c1-btn');
// let btn2 = document.querySelector('#c2-btn');
// let btn3 = document.querySelector('#c3-btn');
// let btn4 = document.querySelector('#c4-btn');

let button = document.querySelectorAll('button');
let remainTime = document.querySelector('.remain_time');



// function time_left() {
//     let time = new Date();
//     let hour = time.getHours();
//     let min = time.getMinutes();
//     let sec = time.getSeconds();
//     console.log(`${hour}: ${min}: ${sec}`)
//     // coundown.innerText = `${hour}: ${min}: ${sec}`
// }

// setInterval(time_left, 1000);


function event_time() {
    cards.forEach((timeAt, i) => {
        let time = new Date();
            let events = [
                {
                    date: time.getDate(),
                    hour: time.getHours() + 2,
                    min: time.getMinutes() ,
                    sec: time.getSeconds() ,
                    am_pm: 'AM'
                },
                {
                    date: time.getDate(),
                    hour: time.getHours() + 3,
                    min: time.getMinutes(),
                    sec: time.getSeconds(),
                    am_pm: 'AM'
                },
                {
                    date: time.getDate() + 2,
                    hour: time.getHours() + 2,
                    min: time.getMinutes() ,
                    sec: time.getSeconds() ,
                    am_pm: 'AM'
                },
                {
                    date: time.getDate() + 2,
                    hour: time.getHours(),
                    min: time.getMinutes() ,
                    sec: time.getSeconds() ,
                    am_pm: 'AM'
                },
            ];
            
            if(events[i].sec > 59){
                events[i].sec -= 60
                events[i].min += 1
            }
            if(events[i].min > 59){
                events[i].min -= 60
                events[i].hour += 1
            }
            if((events[i].hour + 1) > 11 && (events[i].hour + 1)<= 23) {
                events[i].am_pm = 'PM'
            }
            if(events[i].hour > 12){
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
// event_time()

// console.log(cards[0].innerHTML)
// coundown.innerHTML = cards[0].innerHTML

function count() {
    button.forEach((btn) => {
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();

        if(sec > 59){
            sec -= 60
            min += 1
        }
        if(min > 59){
            min -= 60
            hour += 1
        }
        if(hour > 12){
            hour -= 12
        }
        

        btn.addEventListener('click', (btn_id) => {
            if (btn_id.target.id == 'c1-btn'){
                coundown.innerHTML = `Event Time: ${cards[0].innerHTML}`;
                let event_hour = cards[0].innerHTML.slice(0,2);
                let event_min = cards[0].innerHTML.slice(3, 5);
                remainTime.innerHTML = `Time left: ${event_hour - hour} : ${event_min - min}`
                console.log(`Time left: ${event_hour - hour} : ${event_min - min}`)
                console.log(event_hour)
            } else if(btn_id.target.id == 'c2-btn'){
                coundown.innerHTML = `Event Time: ${cards[1].innerHTML}`;
            }else if(btn_id.target.id == 'c3-btn'){
                coundown.innerHTML = `Event Time: ${cards[2].innerHTML}`;
            }else if(btn_id.target.id == 'c4-btn'){
                coundown.innerHTML = `Event Time: ${cards[3].innerHTML}`;
            }
        });
    });

};



count();