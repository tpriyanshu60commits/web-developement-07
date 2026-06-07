const country = [
  {
    countryCode: "IN",
    currencyCode: "INR",
    countryName: "India",
  },
  {
    countryCode: "US",
    currencyCode: "USD",
    countryName: "United States",
  },
  {
    countryCode: "GB",
    currencyCode: "GBP",
    countryName: "United Kingdom",
  },
  {
    countryCode: "JP",
    currencyCode: "JPY",
    countryName: "Japan",
  },
  {
    countryCode: "DE",
    currencyCode: "EUR",
    countryName: "Germany",
  },
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

function loadCountry() {
  country.forEach((items) => {
    const option1 = document.createElement("option");
    option1.value = items.countryCode + "_" + items.currencyCode;
    option1.innerText = items.countryName;
    fromCurrency.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = items.countryCode + "_" + items.currencyCode;
    option2.innerText = items.countryName;
    toCurrency.appendChild(option2);
  });

  fromCurrency.value = "IN_INR";
  toCurrency.value = "US_USD";

  updateFromFlag();
  updateToFlag();
}
loadCountry();

// fromCurrency.addEventListener("change", function () {
//   const value = fromCurrency.value;
//   // console.log(value);
//   const countryCode = value.split("_")[0];
//   // console.log(countryCode);
//   fromFlag.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
// });

function updateFromFlag() {
  const value = fromCurrency.value;
  const countryCode = value.split("_")[0];
  fromFlag.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}
function updateToFlag() {
  const value = toCurrency.value;
  const countryCode = value.split("_")[0];
  toFlag.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}
fromCurrency.addEventListener("change", updateFromFlag);
toCurrency.addEventListener("change", updateToFlag);

async function convertCurrency() {
  const fromValue = fromCurrency.value;
  const toValue = toCurrency.value;

  const fromCode = fromValue.split("_")[1]; // INR
  const toCode = toValue.split("_")[1]; // USD

  try {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCode.toLowerCase()}.json`,
    );

    const data = await response.json();

    const rate = data[fromCode.toLowerCase()][toCode.toLowerCase()];

    const finalAmount = amountEntered.value * rate;

    updatedCurrency.innerText = `${finalAmount.toFixed(2)} ${toCode}`;
  } catch (error) {
    updatedCurrency.innerText = "Something Went Wrong";

    console.log(error);
  }
}
convertBtn.addEventListener("click", convertCurrency);
