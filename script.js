const $loginInput = document.getElementById("Login-input");
const $passwordInput = document.getElementById("Password-input");
const $buttonInput = document.getElementById("Submit");

function tryToLogin() {
  const login = $loginInput.value;
  const password = $passwordInput.value;

  fetch("https://login-service-wsb-wj.netlify.app/.netlify/functions/login", {
    method: "POST",
    body: JSON.stringify({
      login: login,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.isLogged) {
        localStorage.setItem("isLogged", "tak");
        window.location.href = "main.html";
      } else {
        localStorage.setItem("isLogged", "nie");
        document
          .getElementById("incorrect_data_text")
          .classList.remove("hidden");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

$buttonInput.addEventListener("click", tryToLogin);

$passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    tryToLogin();
  }
});
