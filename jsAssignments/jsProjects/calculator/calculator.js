let display = document.querySelector(".displayNumber");
let expression ="";

function Calculate(value)
{
    if(value=="AC")
    {
        expression = "";
        display.innerText = "0";
    }
    else if(value=="C")
    {   
       expression = expression.slice(0,-1);
        if(expression == "")
        {
            display.innerText = "0"
        }
        else
        {
            display.innerText =expression ;
        }
    }
    else if(value=="=")
    {
        expression = eval(expression);
        display.innerText =expression ;
        expression = expression.toString();
    }
    else
    {
        expression = expression + value;
        display.innerText =expression ;

    }
}