function showPage(pageNumber) {
  const div = document.getElementById("div");
  div.innerHTML = "";
  const temp = document.getElementById("page" + pageNumber);
  const clone = temp.content.cloneNode(true);
  div.appendChild(clone);
}
showPage(1);
showPage(2);

function saveUser() {
  input1 = document.getElementsByTagName("input")[1];
  input2 = document.getElementsByTagName("input")[0];
  const name = input1.value;
  const password = input2.value;
  localStorage.setItem(name, password);
  alert("You have successfully registered");
}
