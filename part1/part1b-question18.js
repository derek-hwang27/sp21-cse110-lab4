let repeatingTime = setInterval(ConstantTime, 1000);

function ConstantTime(){
    let d = new Date();
    console.log(d.toLocaleTimeString());
}