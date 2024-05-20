function AnalogSaat(){
    let date = new Date()
    let hour= date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()



let SaatEqrebi = document.querySelector(".saat")
let DeqiqeEqrebi = document.querySelector(".deqiqe")
let SaniyeEqrebi = document.querySelector(".saniye")

let hourDegrees = (hour * 30) +90    //eqrebler 90 deg geride baslayir deye
let minuteDegrees = (minute * 6)+90
let secondDegrees = (second * 6) +90

SaatEqrebi.style.transform = `rotate(${hourDegrees}deg)`
DeqiqeEqrebi.style.transform = `rotate(${minuteDegrees}deg)`
SaniyeEqrebi.style.transform =  `rotate(${secondDegrees}deg)`
}

setInterval(AnalogSaat,1000)


function DigitalSaat() {
    var data = new Date();
    var hours = data.getHours().toString().padStart(2, '0')
    var minutes = data.getMinutes().toString().padStart(2, '0')
    var seconds = data.getSeconds().toString().padStart(2, '0')
    document.querySelector(".box1").textContent=hours
    document.querySelector(".box2").textContent=minutes
    document.querySelector(".box3").textContent=seconds
}

setInterval(DigitalSaat, 1000);
DigitalSaat();
