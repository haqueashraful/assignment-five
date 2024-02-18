let clickedButtonsCount = 0;
const seatSerial = document.getElementById("seat-serial-section");

seatSerial.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    const buttonText = e.target.innerText;
    if (clickedButtonsCount < 4) {
      setBackground(buttonText);
      clickedButtonsCount++;

      setTableData(buttonText);
      let value = getValue("seatPurchase");
      let total = value + 1;
      setValue("seatPurchase", total);

      let totalAvailable = getValue("available-seat");
      let seatAvailable = totalAvailable - 1;
      setValue("available-seat", seatAvailable);

      let totalPriceAmount = total * 550;
      setValue("totalPrice", totalPriceAmount);

      if (clickedButtonsCount === 4) {
        const couponBtn = document.getElementById("couponBtn");
        couponBtn.removeAttribute("disabled");
      }
    } else {
      alert("You can only select up to 4 seats.");
    }
  }
});

couponBtn.addEventListener("click", () => {
  let couponBtn = document.getElementById("couponBtn");
  let couponInput = document.getElementById("couponInput");
  let inputValue = couponInput.value;

  let inputArray = inputValue.split(" ");
  let couponString = inputArray.join("");
  let couponLowerText = couponString.toLowerCase();

  if (couponLowerText === "new15") {
    let totalPrice = getValue("totalPrice");

    let offerPrice = totalPrice - (totalPrice * 15) / 100;

    setValue("grandTotal", offerPrice);
  } else if (couponLowerText === "couple20") {
    let totalPrice = getValue("totalPrice");

    let offerPrice = totalPrice - (totalPrice * 20) / 100;

    setValue("grandTotal", offerPrice);
  }
});

// grandTotal


function formSubmit(e) {
    e.preventDefault();
  
    let number = document.getElementById("PhoneNum");
    let numberValue = number.value;
  
    if (numberValue.length == 11) {
      let modal = document.getElementById("modal");
      modal.classList.remove('hidden')
      console.log(modal);
      console.log("checked");
    } else {
      alert("Please fill in all required fields.");
    }
  }

function buyTicket() {
  const seatSection = document.getElementById("buyTicket");
  seatSection.scrollIntoView({ behavior: "smooth" });
}

function modalHide() {
  let modalSection = document.getElementById("modal");
  modalSection.classList.remove("flex");
  modalSection.classList.add("hidden");
}
