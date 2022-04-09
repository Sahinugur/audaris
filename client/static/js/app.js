const url = "http://localhost:5000/login";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  //e.preventDefault();
  fetch(url, {
    method: "POST",
    body: JSON.stringify({ email: email, password: password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((jdata) => {
      console.log(jdata);
      if (jdata.msg === "success") {
        window.location.href = "http://localhost:5000/home";
      } else {
        alert("username or password is wrong");
      }
    });
});
