let ap = document.querySelector(".ampm")
function displayTime(){
    let dateTime = new Date()
    let hr = dateTime.getHours();
    let min = padZero(dateTime.getMinutes());
    let se = padZero(dateTime.getSeconds());
    
    if(hr > 12){
        hr = hr - 12
        ap.innerHTML = 'PM'
    }
    else{
        ap.innerHTML = 'AM'
    }
    let H = document.getElementById("Hours")
    H.innerHTML = padZero(hr)
    let M = document.getElementById("Min")
    M.innerHTML = min
    let S = document.getElementById("Sec")
    S.innerHTML = se
}
function padZero(num){
    return num<10?"0"+num:num
}
setInterval(displayTime,500)

function todayDate(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let t_date = new Date()
    let da = t_date.getDate()
    let mon = t_date.getMonth()
    let yea = t_date.getFullYear()
    let day = days[t_date.getDay()]
    
    document.querySelector('.date').innerHTML = assinZero(da)
    document.querySelector('.month').innerHTML = assinZero(mon)
    document.querySelector('.year').innerHTML = yea
    document.getElementById("day").innerHTML = day
}
function assinZero(no){
    return no<10?"0"+no:no
}
setInterval(todayDate,1000)