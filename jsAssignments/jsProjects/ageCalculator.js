document.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();
  let billAmount = document.getElementById("BillAmount").value;
  console.log("billAmount: "+billAmount);
  let service = document.getElementById("service").value;
  console.log("service : "+service);
  let totalNumberofPerson = document.getElementById("totalNumberofPerson").value;
  console.log("totalNumberofPerson : " + totalNumberofPerson);

  let tip = (billAmount*service)/100;
  let tipPerPerson = tip/totalNumberofPerson;

  let finalTip =  document.getElementById("dataTip").innerText = tipPerPerson;
    console.log(finalTip);
    
});
