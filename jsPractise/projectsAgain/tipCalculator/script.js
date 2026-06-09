let service = [
  { percentage: 25, text: "% -Top Notch" },
  { percentage: 20, text: "% -Excellent" },
  { percentage: 15, text: "% -Good" },
  { percentage: 10, text: "% -Bad" },
  { percentage: 5, text: "% -Worst" },
];

let serviceCharge = document.getElementById("serviceCharge");

function seriveLoad() {
  service.forEach((items) => {
    const option = document.createElement("option");
    option.value = items.percentage;
    option.innerText = items.percentage + ""+ items.text;
    serviceCharge.appendChild(option);
  });
}
seriveLoad();

document.querySelector("button").addEventListener("click", function(event)
{
    event.preventDefault();
    let billAmount = document.getElementById("billAmount").value;
    let serviceCharge = document.getElementById("serviceCharge").value;
    let persons = document.getElementById("persons").value;

    let tip = (billAmount*serviceCharge)/100;
    const finalTip = tip/persons;
    
    document.getElementById("tipAmount").innerText = finalTip;
})
