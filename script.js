// Email Verification
const form = document.getElementById("form");
const email = document.getElementById("email");
const small = document.querySelector("small");
const input = document.querySelector("input");

const card = document.querySelector(".card");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkEmail();
});

function checkEmail() {
  const emailValue = email.value.trim();

  if (!isEmail(emailValue)) {
    small.style.display = "block";
    input.style.color = "hsl(4, 100%, 67%)";
    input.classList.add("error-border");
  } else if (emailValue === "") {
    small.style.display = "block";
    input.classList.add("error");
    input.classList.add("error-border");
  } else {
    small.style.display = "none";
    input.classList.remove("error");
    input.style.color = "hsl(234, 29%, 20%)";
    input.classList.remove("error-border");
    showSuccessContent();
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Success Content
function showSuccessContent() {
  const isDesktop = window.innerWidth >= 768;
  const emailValue = email.value.trim();

  if (isDesktop) {
    const desktopSuccess = document.querySelector(".desktop-success");
    desktopSuccess.style.display = "flex";
    card.style.display = "none";
    const userEmailDesktop = document.querySelector(".user-email-desktop");
    userEmailDesktop.textContent = emailValue;
  } else {
    const mobileSuccess = document.querySelector(".mobile-success");
    mobileSuccess.style.display = "flex";
    card.style.display = "none";
    const userEmailMobile = document.querySelector(".user-email-mobile");
    userEmailMobile.textContent = emailValue;
  }
}

// Dismiss Btns
const btnMobile = document.querySelector(".btn-dismiss-mobile");
btnMobile.addEventListener("click", dismissMessage);

const btnDesktop = document.querySelector(".btn-dismiss-desktop");
btnDesktop.addEventListener("click", dismissMessage);

function dismissMessage() {
  const mobileSuccess = document.querySelector(".mobile-success");
  const desktopSuccess = document.querySelector(".desktop-success");

  mobileSuccess.style.display = "none";
  desktopSuccess.style.display = "none";
  card.style.display = "grid";
}
