let date=new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('-');

let d=document.getElementById('date');
d.innerHTML=date

const timeE1=document.getElementById('#time');
const degree=document.querySelector('#degree');
const temptype=document.querySelector('#temp-type');
const convertButton=document.querySelector('#button')
const result=document.querySelector('#celcius_value')

setInterval(()=>{
    const time=new Date();

    const hour=time.getHours();
    const minute=time.getMinutes();
    const hourIn12Format=hour>=13 ? hour%12:hour;
    const ampm=hour>12 ?'PM':'AM';

    timeE1.innerHTML=hourIn12Format+':'+minute+ ' '+ampm;
},1000);


window.addEventListener("load",()=>{
    degree.value='';
    result.innerHTML="";
});





































//     const hours=time.getHours();
// const minute=time.getMinutes();
// const hourIn12Format=hours>=13 ? hours%12:hours;
// const ampm=hours >= 12 ? 'PM':'AM';

// timeE1.innerHTML=hourIn12Format+ ':' + minute +' '+ `<span id="am-pm">${ampm}</span>`


