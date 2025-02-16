// check date validaty
function isValidDateAdvanced(dateString) {
  const parts = dateString.split("-");
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return false;
  }

  if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
    return false;
  }

  if (month === 2) { // Check for leap year
    const isLeap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
    if (day > 29 || (day === 29 && !isLeap)) {
      return false;
    }
  }

  return true;
}
// calculate age
function calculateAgeInDetail(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years < 0) {
    years = 0;
    months = 0;
    days = 0;
  }

  return { years, months, days };
}

let Btn = document.getElementById("show-result");

Btn.addEventListener("click", function () {
  let YearVal = document.getElementById("year").value;
  let MonthVal = document.getElementById("month").value;
  let DayVal = document.getElementById("day").value;
  let inpForm = document.getElementById("input-form");
  let errorFields = document.getElementsByClassName("error-msg");


  // check if fields are empty
  if (YearVal == "" || MonthVal == "" || DayVal == "") {
    inpForm.classList.add("error");
    for (let i = 0; i < errorFields.length; i++) {
      const e = errorFields[i];
      e.style.display = "block"
      e.innerHTML = "This field is required."
    }
    document.getElementById("val-error-year").style.display = "none"
  }
  // check if the year is out of range
  else if (YearVal < 1900 || YearVal > new Date().getFullYear()) {
    inpForm.classList.add("error");
    for (let i = 0; i < errorFields.length; i++) {
      const e = errorFields[i];
      e.style.display = "none"
    }
    document.getElementById("val-error-year").style.display = "block"
    document.getElementById("val-error-month").style.display = "none"
    document.getElementById("val-error-day").style.display = "none"
  }
  // check if the month is out of range
  else if (MonthVal < 1 || MonthVal > 12) {
    inpForm.classList.add("error");
    for (let i = 0; i < errorFields.length; i++) {
      const e = errorFields[i];
      e.style.display = "none"
    }
    document.getElementById("val-error-year").style.display = "none"
    document.getElementById("val-error-month").style.display = "block"
    document.getElementById("val-error-day").style.display = "none"
  }
  // check if the day is out of range
  else if (DayVal < 1 || DayVal > 31) {
    inpForm.classList.add("error");
    for (let i = 0; i < errorFields.length; i++) {
      const e = errorFields[i];
      e.style.display = "none"
    }
    document.getElementById("val-error-year").style.display = "none"
    document.getElementById("val-error-month").style.display = "none"
    document.getElementById("val-error-day").style.display = "block"
  }
  // check if the date is valid
  else if (isValidDateAdvanced(`${YearVal}-${MonthVal}-${DayVal}`) === false) {
    inpForm.classList.add("error");
    document.getElementById("val-error-year").style.display = "none"
    document.getElementById("val-error-month").style.display = "none"
    document.getElementById("val-error-day").style.display = "none"
    for (let i = 0; i < errorFields.length; i++) {
      const e = errorFields[0];
      e.style.display = "block"
      e.innerHTML = "Must be a valid date."
    }
  }
  // calculate the age
  else {
    inpForm.classList.remove("error");
    for (let i = 0; i < errorFields.length; i++) {
      const e = errorFields[i];
      e.style.display = "none"
    }
    document.getElementById("val-error-year").style.display = "none"
    document.getElementById("val-error-month").style.display = "none"
    document.getElementById("val-error-day").style.display = "none"
    const detailedAge = calculateAgeInDetail(`${YearVal}-${MonthVal}-${DayVal}`);
    document.getElementById("yearR").innerHTML = detailedAge.years;
    document.getElementById("monthR").innerHTML = detailedAge.months;
    document.getElementById("dayR").innerHTML = detailedAge.days;
  }
});
