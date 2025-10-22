function showPage(pageNumber) {
  const div = document.getElementById("div");
  div.innerHTML = "";
  const temp = document.getElementById("page" + pageNumber);
  const clone = temp.content.cloneNode(true);
  div.appendChild(clone);
}
showPage(3);

function saveUser() {
  input1 = document.getElementsByTagName("input")[1];
  input2 = document.getElementsByTagName("input")[0];
  const name = input1.value;
  const password = input2.value;
  localStorage.setItem(name, password);
  alert("You have successfully registered");
}
document.getElementById("addPerson").addEventListener("submit", saveContant);
const reuqestNewContants = {
  url: "contants",
  method: "POST",
  payload: {
    name: "david",
    phoneNum: "0533703255",
  },
};

function saveContant(event) {
  event.preventDefault();
  console.log(event.target);
  console.log(event.target.elements[0].value);
  server(reuqestNewContants);
}
