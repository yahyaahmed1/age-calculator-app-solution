
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
Btn = document.getElementById("show-result");
Btn.addEventListener("click", function () {
  const detailedAge = calculateAgeInDetail(`${document.getElementById("year").value}-${document.getElementById("month").value}-${document.getElementById("day").value}`);
  document.getElementById("yearR").innerHTML = detailedAge.years;
  document.getElementById("monthR").innerHTML = detailedAge.months;
  document.getElementById("dayR").innerHTML = detailedAge.days;
});

// // Example usage:
// const detailedAge = calculateAgeInDetail('2001-05-11');
// console.log(`Age: ${detailedAge.years} years, ${detailedAge.months} months, and ${detailedAge.days} days`);

