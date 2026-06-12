let randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);


document.querySelector(".btn").addEventListener("click", function (event) {
  event.preventDefault();

  let value = document.getElementById("guessingNumber").value;

  if (value == randomNumber) {
    console.log("Congratulations! You guessed the correct number.");
  } else if (value < randomNumber) {
    console.log("OOPS! SORRY!!! TRY A LARGER NUMBER.");
  } else {
    console.log("OOPS! SORRY!!! TRY A SMALLER NUMBER.");
  }
});
