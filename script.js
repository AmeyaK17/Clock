setInterval(setClock, 1000) //call this func in 1000 ms

const hourHand = document.querySelector('[data-hour-hand]')
const minutesHand = document.querySelector('[data-minutes-hand]')
const secondsHand = document.querySelector('[data-seconds-hand]')

function setClock(){
    const currentDate = new Date;
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;  //added secondsRatio to allow our hands to move slowlu throught the minute or hour, instead of jumping to the next number directly
    const hourRatio = (secondsRatio + currentDate.getHours()) / 12 ;

    setRototaion (secondsHand, secondsRatio);
    setRototaion (minutesHand, minutesRatio);
    setRototaion (hourHand, hourRatio);
    
}

function setRototaion (element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);  //apply style from css
}

setClock();