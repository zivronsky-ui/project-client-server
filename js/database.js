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
