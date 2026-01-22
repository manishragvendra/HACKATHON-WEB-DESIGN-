let captcha = "";

function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  document.getElementById("captchaText").innerText = captcha;
}

function login() {
  const userCaptcha = document.getElementById("captchaInput").value.toUpperCase();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("All fields required");
    return;
  }

  if (userCaptcha !== captcha) {
    alert("Invalid CAPTCHA");
    generateCaptcha();
    return;
  }

  // Demo authentication success
  localStorage.setItem("loggedInUser", username);
  window.location.href = "dashboard.html";
}

window.onload = () => {
  const role = localStorage.getItem("selectedRole");
  document.getElementById("roleTitle").innerText = role + " LOGIN";
  generateCaptcha();
};
