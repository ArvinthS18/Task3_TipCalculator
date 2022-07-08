function tipCalculate(slider,bill){
    const tip = document.getElementById('tip');
    const tot = document.getElementById('tot');
    var slideval = document.getElementById('slideval');
    var bill = document.getElementById(bill).value;
    const prcnt = slider/100;
    tip.innerHTML =bill * prcnt.toFixed(2);
    tot.innerHTML=parseInt(bill)+parseInt(bill*prcnt);
    slideval.innerHTML = slider+"%";
}
