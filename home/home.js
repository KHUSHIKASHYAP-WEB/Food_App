const cityUrl = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId=";
function fetchCity() {
  fetch(cityUrl, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      data.map((item) => {
        let element = document.createElement("option");
        let text = document.createTextNode(item.state);
        element.appendChild(text);
        element.value = item.state_id;
        document.getElementById("selectcity").appendChild(element);
      });
    });
}
function getRest() {
  let cityId = document.getElementById("selectcity").value;
  let rest = document.getElementById("selectrestaurant");
  while (rest.length > 0) {
    rest.remove(0);
  }
  fetch(`${restUrl}${cityId}`, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      data.map((item) => {
        let element = document.createElement("option");
        let text = document.createTextNode(item.restaurant_name);
        element.appendChild(text);
        rest.appendChild(element);
      });
    });
}
function loadCoupon() {
  document.getElementById("coupon").style.display = "block";
  document.getElementById("coupon").style.opacity = "1";
}
function closeCoupon() {
  document.getElementById("coupon").style.display = "none";
  document.getElementById("coupon").style.opacity = ".5";
}
