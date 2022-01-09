const formElm = document.getElementById("form");
const usernameElm = document.getElementById("username");
const emailElm = document.getElementById("email");
const phoneElm = document.getElementById("phoneNumber");
const passwordElm = document.getElementById("password");
const password2Elm = document.getElementById("password2");
const passGeneElm = document.getElementById("key");
const passElm = document.getElementById("pass");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkInputs();

  let formData = {};
  console.log(this.length);
  [...this.elements].forEach(function (el) {
    // console.log(el.type); //text
    // console.log(el.value);// name i wrote
    // console.log(el.name);// name = "firstname"
    formData[el.name] = el.value;
    console.log(formData);
  });
});

function checkInputs() {
  //get the value
  const usernameValue = usernameElm.value.trim();
  const emailValue = emailElm.value.trim();
  const phoneValue = phoneElm.value.trim();
  const passwordValue = passwordElm.value.trim();
  const password2Value = password2Elm.value.trim();

  if (usernameValue === "") {
    setErrorFor(usernameElm, "User name cannot be blank."); //show error message
  } else if (!isName(usernameValue)) {
    //add error class
    setErrorFor(usernameElm, "User name write proper formate 'John Doe'.");
  } else {
    setSuccessFor(usernameElm);
  }

  if (emailValue === "") {
    setErrorFor(emailElm, "Email can not be blank.");
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailElm, "Email is not valid.");
  } else {
    setSuccessFor(emailElm);
  }

  if (phoneValue === "") {
    //show error message
    //add error class
    setErrorFor(phoneElm, "User name cannot be blank.");
  } else if (!isPhone(phoneValue)) {
    setErrorFor(phoneElm, "your phone number formate +8801xxxxxxxxx.");
  } else {
    //add success class
    setSuccessFor(phoneElm);
  }

  console.log(passwordGenerator());
  if (passwordValue === "") {
    //show error message
    //add error class
    setErrorFor(passwordElm, "Password is required.");
  } else {
    //add success class
    setSuccessFor(passwordElm);
  }
  if (password2Value === "") {
    //show error message
    //add error class
    setErrorFor(password2Elm, "Password is required.");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2Elm, "Password does not match.");
  } else {
    //add success class
    setSuccessFor(password2Elm);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  console.log(formControl);
  const small = formControl.querySelector("small");
  console.log(small);
  formControl.className = "form-control error";
  //add error message inside smalltag
  small.innerHTML = message;
  // console.log(message);
  // // add error class
}

function setSuccessFor(input) {
  const formControl = input.parentElement; //.form-control
  formControl.className = "form-control success";
}

function isPhone(phone) {
  return /\+?(88)?01\d\d{8}/.test(phone);
}

function isName(name) {
  console.log(name);
  return /^[a-zA-Z ]+$/.test(name);
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

passGeneElm.addEventListener("click", (e) => {
  e.preventDefault();

  const passout = passwordGenerator();
  passElm.innerHTML = passout;
});

function passwordGenerator() {
  // // add error class

  const Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const Names = [
    "Aaran",
    "Aaren",
    "Aodeba",
    "Zaid",
    "Zain",
    "Zaine",
    "Zaineddine",
    "Zainedin",
    "Zak",
    "Zakaria",
    "Zakariya",
    "Zakary",
    "Zaki",
    "Zakir",
    "Zakk",
    "Zamaar",
    "Zander",
    "Zane",
    "Zarran",
    "Zayd",
    "Zayn",
    "Zayne",
    "Ze",
    "Zechariah",
    "Zeek",
    "Zeeshan",
    "Zeid",
    "Zein",
    "Zen",
    "Zendel",
    "Zenith",
    "Zennon",
    "Zeph",
    "Zerah",
    "Zhen",
    "Zhi",
    "Zhong",
    "Zhuo",
    "Zi",
    "Zidane",
    "Zijie",
    "Zinedine",
    "Zion",
    "Zishan",
    "Ziya",
    "Ziyaan",
    "Zohaib",
    "Zohair",
    "Zoubaeir",
    "Zubair",
    "Zubayr",
    "Zuriel",
  ];
  const Symbols = ["#", "£", "@", "%", "?", "!", "+", "$", "-", "*"];
  const RandomName = Names[Math.floor(Math.random() * Names.length)];
  const RandomNumber = Numbers[Math.floor(Math.random() * Numbers.length)];
  const RandomNumber2 = Numbers[Math.floor(Math.random() * Numbers.length)];
  const RandomSymbol = Symbols[Math.floor(Math.random() * Symbols.length)];
  const RandomSymbol2 = Symbols[Math.floor(Math.random() * Symbols.length)];
  const RandomSymbol3 = Symbols[Math.floor(Math.random() * Symbols.length)];
  const RandomSymbol4 = Symbols[Math.floor(Math.random() * Symbols.length)];
  const Password = `${RandomNumber2}${RandomSymbol}${RandomName}${RandomNumber}${RandomSymbol4}`;
  const Password2 = `${RandomNumber2}${RandomSymbol2}${RandomName}${RandomSymbol3}${RandomSymbol4}`;
  const Password3 = `${RandomNumber}${RandomNumber2}${RandomName}${RandomNumber}${RandomSymbol4}`;
  const Password4 = `${RandomSymbol2}${RandomSymbol3}${RandomName}${RandomNumber2}${RandomNumber}`;
  const Passwords = [Password, Password2, Password3, Password4];
  const GeneratedPassword =
    Passwords[Math.floor(Math.random() * Passwords.length)];
  const GeneratedPasswordToLowerCase = GeneratedPassword.toLowerCase();
  /* Print The Passwords*/
  //console.log(GeneratedPassword);
  return GeneratedPasswordToLowerCase;
}
