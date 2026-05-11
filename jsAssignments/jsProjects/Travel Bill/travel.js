document
  .getElementById("calculate")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let km = parseFloat(document.getElementById("BillAmount").value);
    let totalBill;
    if (km === 0) {
      totalBill = 0;
    }
    else if (km > 0 && km <= 10) {
      totalBill = km * 10;
      console.log("totalBill :" + totalBill);
    } else {
      totalBill = 10 * 10 + (km - 10) * 11;
      console.log("totalBill :" + totalBill);
    }
    document.getElementById("databill").innerText = totalBill;
  });
