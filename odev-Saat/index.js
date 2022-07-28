let Name = prompt("İsminizi giriniz:");
let myname = document.querySelector("#myName");
myname.innerHTML =  `${Name}`;
let myclock = document.querySelector('#myClock')


function showTime(){
    var tarih=new Date();
	var saat=tarih.getHours();
	var dakika=tarih.getMinutes();
	var saniye=tarih.getSeconds();	
	myclock.innerHTML = saat+":"+dakika+":"+saniye ;
   
}

var anlik=setInterval(function(){showTime()},1000);
