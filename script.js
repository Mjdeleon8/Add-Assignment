// NAME DISPLAY
let nameValue = document.getElementById("name");
let nameDisplay = document.getElementById("nameDisplay");

// DESCRIPTION DISPLAY
let description = document.getElementById("description");
let descriptionDisplay = document.getElementById("descriptionDisplay");

let optionValue = document.getElementById("option-value");
let subjectValue = document.getElementById("subjectValue");

const dateValue = document.getElementById("dateValue");
const dateDisplay = document.getElementById("dueDisplay");

function submitButton() {
  subjectValue.textContent = optionValue.value;
  nameDisplay.textContent = nameValue.value;
  descriptionDisplay.textContent = description.value;

  // DATE DISPLAY
  const getMonthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (dateValue.value) {
    const overAllDate = dateValue.value.split("-");

    if (overAllDate.length === 3) {
      const dateObject = new Date(
        overAllDate[0],
        overAllDate[1] - 1,
        overAllDate[2]
      );
      const string = `${
        getMonthNames[dateObject.getMonth()]
      } ${dateObject.getDate()}, ${dateObject.getFullYear()}`;
      dateDisplay.textContent = string;
    }
  }

  // SUBMIT CONTAINER DISPLAY
  const submitValue = document.getElementById("submitValue");
  submitValue.style.display = "block";
}

// DELETE ALL OF THE CONTAINER VALUE AND DISPLAY

function deleteButton() {
  submitValue.style.display = "none";
  subjectValue = "";
  nameValue.value = "";
  description.value = "";
  optionValue.value = "";
  dateValue.value = "";

  // REMOVE DISPLAY

  subjectValue.textContent = "";
  nameDisplay.textContent = "";
  descriptionDisplay.textContent = "";
  dateDisplay.textContent = "";
}

// DELETE THE VALUE OF CONTAINER

function removeBtn() {
  // SUBJECT VALUE/DISPLAY
  subjectValue.textContent = "";

  // REMOVE DATE VALUE
  nameValue.value = "";

  // REMOVE DATE VALUE
  description.value = "";

  // DATE VALUE
  optionValue.value = "";

  // DATE VALUE
  dateValue.value = "";

  // REMOVE DISPLAY
  subjectValue.textContent = "";
  nameDisplay.textContent = "";
  descriptionDisplay.textContent = "";
  dateDisplay.textContent = "";
}

// dateValue.addEventListener("change", dateDisplay);
