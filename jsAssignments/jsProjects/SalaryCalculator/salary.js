document
  .getElementById("calculateButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

  let basicSalary = Number(document.getElementById("BasicSalary").value);
    console.log("BasicSalary :" + basicSalary);

    if (basicSalary == "0" || basicSalary === "") {
      alert("salary can't be zero or empty");
    } else if (basicSalary < 0) {
      alert("salary can't be negative");
    }
    let result = GrossSalary(basicSalary);
    console.log(result);

    document.getElementById("basicSalaryData").innerText= `₹${result.basicSalary}`;
    document.getElementById("HRAData").innerText= `₹${result.hra}`;
    document.getElementById("DAData").innerText= `₹${result.da}`;
    document.getElementById("GrossSalaryData").innerText= `₹${result.gross}`;
    document.getElementById("lower").classList.remove("d-none");


  });

function GrossSalary(basic) {
  let basicSalary = Number(document.getElementById("BasicSalary").value);
  let hra = 0;
  let da = 0;
  let grossSalary = 0;

  hra = (basicSalary*20)/100; 
  da = (basicSalary*10)/100; 
  grossSalary = basicSalary + hra + da;
  console.log(grossSalary);
  

  return{
    basicSalary: basicSalary,
    hra:hra,
    da:da,
    gross:grossSalary
  };
}

document.getElementById("reset").addEventListener("click" , function()
{
    document.getElementById("lower").classList.add("d-none");
    document.getElementById("BasicSalary").value = "";

})