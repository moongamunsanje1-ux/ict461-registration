const form = document.querySelector("#registration-form");
const status = document.querySelector("#form-status");

const rules = {
  fullName: (value) =>
    value.trim().length < 3 ? "Enter your full name." : "",

  studentId: (value) =>
    /^\d{9}$/.test(value.trim()) ? "" : "Student ID must be exactly nine digits.",

  email: (value) =>
    value.includes("@") && value.includes(".") ? "" : "Enter a valid email address.",

  programme: (value) =>
    value === "" ? "Choose your programme." : "",

  course: (value) =>
    value === "" ? "Choose a course." : ""
};

function checkField(field) {
  const message = rules[field.name](field.value);
  const errorBox = document.querySelector("#" + field.id + "-error");

  errorBox.textContent = message;
  field.setAttribute("aria-invalid", message !== "");
  if (message !== "") {
    field.setAttribute("aria-describedby", field.id + "-error");
  } else {
    field.removeAttribute("aria-describedby");
  }
  return message === "";
}

form.querySelectorAll("input, select").forEach((field) => {
  field.addEventListener("blur", () => checkField(field));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "";

  const fields = [...form.querySelectorAll("input, select")];
  const results = fields.map(checkField);
  const firstBad = fields.find((field, i) => results[i] === false);

  if (firstBad) {
    firstBad.focus();
    return;
  }

  const data = Object.fromEntries(new FormData(form));
  console.log("Would send to server:", data);

  status.textContent =
    "Registration accepted for " + data.course + ". Keep this page as proof.";
  form.reset();
});