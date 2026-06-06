const country = [
    {
        countryCode : "IN",
        currencyCode : "INR",
        countryName : "India"
    },
    {
        countryCode  :  "US",
        currencyCode  :  "USD",
        countryName  :  "United States"
    },
    {
        countryCode  :  "GB",
        currencyCode  :  "GBP",
        countryName  :  "United Kingdom"
    },
    {
        countryCode  :  "JY",
        currencyCode :  "JPY",
        countryName  :  "Japan"
    },
    {
        countryCode  :  "DE",
        currencyCode  :  "EUR",
        countryName  :  "Germany"
    }
];

const fromFlag = document.getElementById("fromFlag");
const fromCurrency = document.getElementById("fromCurrency");
const toFlag = document.getElementById("toFlag");
const toCurrency = document.getElementById("toCurrency");
const amountEntered = document.getElementById("amount");
const convertBtn = document.getElementById("convertBtn");
const updatedCurrency = document.getElementById("updatedCurrency");


// document.getElementById("convertBtn").addEventListener("click", function()
// {
//     const amount = document.getElementById("amount").value;
//     console.log(amount);
    
// })

function loadCountry()
{
    country.forEach((items)=>
    {
        const option1 = document.createElement("option");
        option1.value = items.countryCode +"_"+ items.countryCode;
        option1.innerText = items.countryName;
        fromCurrency.appendChild(option1)

        const option2 = document.createElement("option");
        option2.value =  items.countryCode +"_"+ items.countryCode;
        option2.innerText = items.countryName;
        toCurrency.appendChild(option2)

    })
    
}
loadCountry();

