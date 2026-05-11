document
  .getElementById("calculate")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let units = document.getElementById("BillAmount").value;
    console.log("units :" + units);
    
    let totalBill;
    let finalBill;
    if (units > 0 && units <= 50) {
      totalBill = units * 0.5;
      finalBill = totalBill + (totalBill * 20) / 100;
      console.log("finalBill : " + finalBill);
    } else if (units > 50 && units <= 200) {
      totalBill = 50*0.5 + (units-50)*0.75;
      finalBill = totalBill + (totalBill * 20) / 100;
      console.log("finalBill : " + finalBill);
    } else if (units > 200 && units <= 450) {
      totalBill = 50*0.5 + 150*0.75 + (units-200)*1.20;
      finalBill = totalBill + (totalBill * 20) / 100;
      console.log("finalBill : " + finalBill);
    } else {
      totalBill = 50*0.5 + 150*0.75 + 250*1.20 + (units-450)*1.50;
      finalBill = totalBill + (totalBill * 20) / 100;
      console.log("finalBill : " + finalBill);
    }
     document.getElementById("databill").innerText = finalBill;
     finalBill.toFixed(2);
     
  });

  document.getElementById("reset").addEventListener("click", function(event){

    event.preventDefault();

    document.getElementById("BillAmount").value = "";

    document.getElementById("databill").innerText = "";

});
