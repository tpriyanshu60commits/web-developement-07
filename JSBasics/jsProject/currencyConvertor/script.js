
const country = [
  {
    countryCode: "IN",
    countryName: "India",
    currencyCode: "INR",
  },

  {
    countryCode: "US",
    countryName: "United States",
    currencyCode: "USD",
  },

  {
    countryCode: "GB",
    countryName: "United Kingdom",
    currencyCode: "GBP",
  },

  {
    countryCode: "JP",
    countryName: "Japan",
    currencyCode: "JPY",
  },

  {
    countryCode: "EU",
    countryName: "Europe",
    currencyCode: "EUR",
  },
];



/* =========================
   LOAD DROPDOWN
========================= */

function loadCountry() {
  const country1 = document.getElementById("country1");

  const country2 = document.getElementById("country2");

  country.forEach((item) => {

    // OPTION 1
    const option1 = document.createElement("option");

    option1.value =
      item.currencyCode + "_" + item.countryCode;

    option1.innerText =
      item.countryName;

    country1.appendChild(option1);



    // OPTION 2
    const option2 = document.createElement("option");

    option2.value =
      item.currencyCode + "_" + item.countryCode;

    option2.innerText =
      item.countryName;

    country2.appendChild(option2);

  });



  // DEFAULT VALUE
  country1.value = "USD_US";
  country2.value = "INR_IN";



  updateFlag1();
  updateFlag2();
}

loadCountry();



/* =========================
   UPDATE FLAG 1
========================= */

function updateFlag1() {

  const value =
    document.getElementById("country1").value;

  const countryCode =
    value.split("_")[1];

  document.getElementById("flag1").src =
    `https://flagsapi.com/${countryCode}/flat/64.png`;
}



/* =========================
   UPDATE FLAG 2
========================= */

function updateFlag2() {

  const value =
    document.getElementById("country2").value;

  const countryCode =
    value.split("_")[1];

  document.getElementById("flag2").src =
    `https://flagsapi.com/${countryCode}/flat/64.png`;
}



/* =========================
   CONVERT CURRENCY
========================= */

async function convertCurrency() {

  const fromValue =
    document.getElementById("country1").value;

  const toValue =
    document.getElementById("country2").value;

  const amount =
    document.getElementById("orgAmount").value;

  const errorMsg =
    document.getElementById("errorMsg");

  const result =
    document.getElementById("newAmount");

  const rateText =
    document.getElementById("rateText");

  const button =
    document.getElementById("convertBtn");



  /* =========================
     VALIDATION
  ========================= */

  errorMsg.innerText = "";

  result.innerText = "";

  rateText.innerText = "";



  if (fromValue == "") {
    errorMsg.innerText =
      "Please select a From country";

    return;
  }

  if (toValue == "") {
    errorMsg.innerText =
      "Please select a To country";

    return;
  }

  if (amount == "") {
    errorMsg.innerText =
      "Please enter amount";

    return;
  }

  if (amount <= 0) {
    errorMsg.innerText =
      "Amount must be greater than zero";

    return;
  }



  /* =========================
     SPLIT VALUE
  ========================= */

  const fromCurrency =
    fromValue.split("_")[0];

  const toCurrency =
    toValue.split("_")[0];



  /* =========================
     LOADING
  ========================= */

  button.innerText = "Loading...";



  try {

    /* =========================
       API CALL
    ========================= */

    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency.toLowerCase()}.json`
    );

    const data =
      await response.json();



    /* =========================
       GET RATE
    ========================= */

    const rate =
      data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()];



    /* =========================
       FINAL AMOUNT
    ========================= */

    const finalAmount =
      amount * rate;



    /* =========================
       SHOW RESULT
    ========================= */

    result.innerText =
      `${finalAmount.toFixed(2)} ${toCurrency}`;

    rateText.innerText =
      `1 ${fromCurrency} = ${rate} ${toCurrency}`;

  }

  catch (error) {

    errorMsg.innerText =
      "Something went wrong";

    console.log(error);

  }

  finally {

    button.innerText = "Convert";

  }

}



/* =========================
   SWAP COUNTRY
========================= */

function swapCountry() {

  const country1 =
    document.getElementById("country1");

  const country2 =
    document.getElementById("country2");



  // STORE VALUE
  const temp =
    country1.value;



  // SWAP
  country1.value =
    country2.value;

  country2.value =
    temp;



  // UPDATE FLAGS
  updateFlag1();
  updateFlag2();



  // AUTO CONVERT
  const amount =
    document.getElementById("orgAmount").value;

  if (amount != "") {
    convertCurrency();
  }

}
