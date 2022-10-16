function calc(opt) {
  let a = document.getElementById("fnum").value;
  let b = document.getElementById("snum").value;
  let out;
  if (opt == "Add") {
    out = `Sum of Number is ${Number(a) + Number(b)}`;
  } else {
    out = `Sub of Number is ${Number(a) - Number(b)}`;
  }
  document.getElementsByClassName("output")[0].innerText = out;
}
