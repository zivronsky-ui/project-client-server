function deletePerson(name) {
  let person = JSON.parse(localStorage.getItem("peopleNumArr"));
  person = person.filter((item) => item.name !== הערך_למחיקה);
  localStorage.setItem("peopleNumArr", JSON.stringify(person));
}
// function deletePerson() {}

function addPerson(name, phoneNum) {
  let peopleNumArr = JSON.parse(localStorage.getItem("peopleNumArr")) || [];

  let newPersonObj = {};
  newPersonObj.name = name;
  newPersonObj.phoneNum = phoneNum;
  peopleNumArr.push(newPersonObj);
  let peopleArrAsString = JSON.stringify(peopleNumArr);
  localStorage.setItem("peopleNumArr", peopleArrAsString);
}
