let display = document.querySelector(".displayNumber");

let expression = "";

function Calculate(value)
{
    if(value == "AC")
    {
        expression = "";
        display.innerText = "0";
    }

    else if(value == "C")
    {
        expression = expression.slice(0, -1);

        if(expression == "")
        {
            display.innerText = "0";
        }
        else
        {
            display.innerText = expression;
        }
    }

    // = -> answer nikalo
    else if(value == "=")
    {
        let answer = eval(expression);

        display.innerText = answer;

        expression = answer.toString();
    }

    else
    {
        expression = expression + value;
        display.innerText = expression;
    }
}