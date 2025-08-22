const displayData = (number) => {
  let display = document.getElementById("display");
  display.innerHTML += number;
};

const clearData = () => {
  let display = document.getElementById("display");
  let output = document.getElementById("output");
  display.innerHTML = "";
  output.innerHTML = "0";
};

const removeData = () => {
  let display = document.getElementById("display");
  let output = document.getElementById("output");
  display.innerHTML = display.innerHTML.slice(0, -1);
  output.innerHTML = "0";
};

const showResult = () => {
  let display = document.getElementById("display");
  let output = document.getElementById("output");
  try {
    output.innerHTML = eval(display.innerHTML);
  } catch (err) {
    display.innerHTML = "Invalid Expression";
  }
};
