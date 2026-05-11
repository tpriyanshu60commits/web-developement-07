let random = Math.floor(Math.random() * 10) + 1;
  console.log("random :" + random);


document.querySelector("button").addEventListener("click", function () {
  event.preventDefault();
  let guessnumber = document.getElementById("number").value;
  console.log("guessnumber : " + guessnumber);
    if(guessnumber>random)
    {
        console.log("OOPS! SORRY!!! TRY A SMALLER NUMBER.");
    }
    else if(guessnumber<random)
    {
        console.log("OOPS! SORRY!!! TRY A LARGER NUMBER.");
    }
    else
    {
        console.log("Guessing number is correct");
    }


});
