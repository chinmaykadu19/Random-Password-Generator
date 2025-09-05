function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUpper = document.getElementById("uppercase").checked;
    const includeLower = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
  
    // ✅ Warn if length < 5, but still continue
    if (length < 5) {
      alert("Password is not strong enough!");
    }
  
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  
    let allChars = "";
    if (includeUpper) allChars += upperChars;
    if (includeLower) allChars += lowerChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;
  
    if (allChars === "") {
      document.getElementById("passwordBox").innerText = "Please select at least one option!";
      return;
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    const passwordBox = document.getElementById("passwordBox");
    passwordBox.innerText = password;
  
    // Bounce animation when a new password is generated
    passwordBox.style.transform = "scale(1.1)";
    passwordBox.style.transition = "transform 0.2s ease";
    setTimeout(() => {
      passwordBox.style.transform = "scale(1)";
    }, 200);
  
    // ✅ Check strength and update progress bar
    checkStrength(password, includeUpper, includeLower, includeNumbers, includeSymbols);
  }
  
  function checkStrength(password, upper, lower, number, symbol) {
    const strengthBar = document.getElementById("strengthBar");
    const strengthText = document.getElementById("strengthText");
  
    let strength = 0;
  
    if (upper) strength++;
    if (lower) strength++;
    if (number) strength++;
    if (symbol) strength++;
  
    let status = "Weak";
    let width = "30%";
    let color = "red";
  
    if (password.length >= 6 && strength >= 2) {
      status = "Medium";
      width = "60%";
      color = "orange";
    }
    if (password.length > 10 && strength >= 3) {
      status = "Strong";
      width = "100%";
      color = "limegreen";
    }
  
    strengthBar.style.width = width;
    strengthBar.style.background = color;
    strengthText.innerText = `Strength: ${status}`;
  }
  