function deletePerson(name) {
  let person = JSON.parse(localStorage.getItem("peopleNumArr"));
  person = person.filter((item) => item.name !== הערך_למחיקה);
  localStorage.setItem("peopleNumArr", JSON.stringify(person));
}