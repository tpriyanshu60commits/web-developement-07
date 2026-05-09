document.querySelector("form").addEventListener("submit", (event)=>{
    event.preventDefault();

    const dob = document.getElementById("DOB").value;
    const CurrentDate = document.getElementById("CurrentDate").value;
    console.log("dob =" +  dob);
    console.log("CurrentDate =" +CurrentDate);

    let CurrentYear = Number(CurrentDate.split("-")[0]);
    console.log("CurrentYear =" +  CurrentYear);

    const age =Number(CurrentDate.split("-")[0]) - Number(dob.split("-")[0]);
    console.log(age);
})  

