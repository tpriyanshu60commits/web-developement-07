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

const fromCurrency = document.getElementById("fromCurrency");

const toCurrency = document.getElementById("toCurrency");

const fromFlag = document.getElementById("fromFlag");

const toFlag = document.getElementById("toFlag");

const amount = document.getElementById("amount");

const convertBtn = document.getElementById("convertBtn");

const realAmount = document.getElementById("realAmount");

function loadCountry() {
  country.forEach((item) => {
    const option1 = document.createElement("option");

    option1.value = item.currencyCode + "_" + item.countryCode;

    option1.innerText = item.countryName;

    fromCurrency.appendChild(option1);

    const option2 = document.createElement("option");

    option2.value = item.currencyCode + "_" + item.countryCode;

    option2.innerText = item.countryName;

    toCurrency.appendChild(option2);
  });

  fromCurrency.value = "USD_US";

  toCurrency.value = "INR_IN";

  updateFromFlag();

  updateToFlag();
}

loadCountry();

function updateFromFlag() {
  const value = fromCurrency.value;

  const countryCode = value.split("_")[1];

  fromFlag.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

function updateToFlag() {
  const value = toCurrency.value;

  const countryCode = value.split("_")[1];

  toFlag.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

fromCurrency.addEventListener("change", updateFromFlag);

toCurrency.addEventListener("change", updateToFlag);

async function convertCurrency() {
  const fromValue = fromCurrency.value;

  const toValue = toCurrency.value;

  const fromCode = fromValue.split("_")[0];

  const toCode = toValue.split("_")[0];

  try {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCode.toLowerCase()}.json`,
    );

    const data = await response.json();
    console.log(data);
    

    const rate = data[fromCode.toLowerCase()][toCode.toLowerCase()];

    const finalAmount = amount.value * rate;

    realAmount.innerText = `${finalAmount.toFixed(2)} ${toCode}`;
  } catch (error) {
    realAmount.innerText = "Something Went Wrong";

    console.log(error);
  } finally {
    convertBtn.innerHTML = `<i class="bi bi-arrow-clockwise fs-5"></i> Convert`;
  }
}
convertBtn.addEventListener("click", convertCurrency);
