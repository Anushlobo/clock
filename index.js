
setInterval(()=>{
    let currentTime=  new Date();
console.log(currentTime);
document.getElementById("hrs").innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours();
document.getElementById("min").innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
document.getElementById("sec").innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();

},1000)

