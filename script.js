const display = document.getElementById("display");
let exp = "";

function add(val) {
  exp += val;
  display.value = exp;
}

function sub(val) {
  exp -= val;
  display.value = exp;
}

function div(val) {
  exp /= val;
  display.value = exp;
}

function mul(val) {
  exp *= val;
  display.value = exp;
}

function clearAll() {
  exp = "";
  display.value = "";
}

function result() {
  exp = eval(exp);
  display.value = exp;
}
