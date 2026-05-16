function submit() {
  let name = document.getElementById("name").value;
  console.log(name);
  // let pattern =/^[A-za-z]+$/
  let pattern = /^[A-Za-z]+$/;
  console.log(pattern.test(name));

  let email = document.getElementById("email").value;
  // let emailPattern = /^[^\s@]+@gmail[^\s@]*$/
  let emailPattern = /^[A-Za-z\d.]+@(gmail|outlook)(\.com)$/;
  console.log(emailPattern.test(email));

  let q1 = document.getElementById("q1").value;
  let q1regix = /^[a-z]+$/;
  console.log(q1regix.test(q1));

  let q2 = document.getElementById("q2").value;
  let q2regix = /^[0-9]+$/;
  console.log(q2regix.test(q2));
  let q3 = document.getElementById("q3").value;
  let q3regix = /^[A-Z]+$/;
  console.log(q3regix.test(q3));
  //   apple
  // boy
  // cat
  let q4 = document.getElementById("q4").value;
  let q4regix = /^[a-c]+[A-Za-z]*$/;
  console.log(q4regix.test(q4));

  //   string sirf vowels contain kare:

  // aeiou
  // aaa
  // eio
  let q5 = document.getElementById("q5").value;
  let q5regix = /^(a|e|i|o|u)+$/;
  console.log(q5regix.test(q5));

  let q6 = document.getElementById("q6").value;
  let q6regix = /^\d{5}$/;
  console.log(q6regix.test(q6));
  let q7 = document.getElementById("q7").value;
  let q7regix = /^[A-Z]{3}$/;
  console.log(q7regix.test(q7));
  // ➡ exactly 2 lowercase letters + 3 digits.
  let q8 = document.getElementById("q8").value;
  let q8regix = /^[a-z]{2}\d{3}$/;
  console.log(q8regix.test(q8));

  //   ➡ minimum 1 digit hona chahiye.
  let q9 = document.getElementById("q9").value;
  let q9regix = /^[0-9]+$/;
  console.log(q9regix.test(q9));
//   zero ya more a.
  let q10 = document.getElementById("q10").value;
  let q10regix = /^[a]*$/;
  console.log(q10regix.test(q10));
//   ➡ string sirf "hello" hi ho.
 let q11 = document.getElementById("q11").value;
  let q11regix = /^(hello)$/;
  console.log(q11regix.test(q11));
//   ➡ 10 digit Indian phone number.
 let q12 = document.getElementById("q12").value;
  let q12regix = /^[6-9]\d{9}$/;
  console.log(q12regix.test("q12 :" + q12));
//   ➡ email me sirf:gmail OR outlook
 let q13 = document.getElementById("q13").value;
  let q13regix =/^[A-Za-z\d\.]+@gmail.com$/;
  console.log(q13regix.test(q13));
   let q14 = document.getElementById("q14").value;
  let q14regix = /^(ha)+$/;
  console.log(q14regix.test(q14));
     let q15 = document.getElementById("q15").value;
  let q15regix = /^.{6,}$/;
  console.log(q15regix.test(q15));
}
