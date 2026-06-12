document
  .getElementById("Calculate")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let totalBill = 0;
    let units = document.getElementById("electricityBill").value;
    if (units <= 50) {
      let bill = units * 0.5;
      let surcharge = (bill * 20) / 100;
      totalBill = bill + surcharge;
      console.log(totalBill);
    } else if (units > 50 && units <= 200) {
      let bill = (units - 50) * 0.75 + 50 * 0.5;
      let surcharge = (bill * 20) / 100;
      totalBill = bill + surcharge;
      console.log(totalBill);
    } else if (units > 200 && units <= 450) {
      let bill = (units - 200) * 1.2 + 50 * 0.5 + 150 * 0.75;
      let surcharge = (bill * 20) / 100;
      totalBill = bill + surcharge;
      console.log(totalBill);
    } else {
      let bill = (units - 450) * 1.5 + 50 * 0.5 + 150 * 0.75 + 250 * 1.2;
      let surcharge = (bill * 20) / 100;
      totalBill = bill + surcharge;
      console.log(totalBill);
    }

    document.getElementById("realAmount").innerText = totalBill.toFixed(2);
  });
