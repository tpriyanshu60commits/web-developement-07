function changes() {
  let el = document.getElementById("heading");
  el.innerText = "hello world";
  el.style.color = "blue";
  let p = document.createElement("p");
  p.textContent = "this is js created paragraph";
  console.log(p.innerText);
  document.body.appendChild(p);
  el.remove();
}

let paras = document.getElementsByTagName("p");
console.log(paras[1]);


// let el = document.querySelector(".text");
// console.log(el);

function changeColor()
{
    let el = document.getElementsByClassName("text");
    console.log(el);
    
    for(let i=0 ; i<el.length ; i++)
    {
        el[i].style.color = "pink";
        el[i].style.fontSize = "50px";
        el[i].style.backgroundColor = "yellow";
    }
    
}

function change()
{
    let sm = document.getElementById("heading1");
    sm.classList.toggle("dark");
}


function change2()
{
    let sm = document.getElementById("paragraph2");
    sm.classList.toggle("dark");
    sm.classList.add("red");
}
btn.onclick()
{
    let btn = document.getElementById("btn");
    btn.style.color = "brown";
}

