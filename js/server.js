const reuqestNewContants = {
  url: "contatns",
  method: "POST",
  payload: {
    name: "david",
    phoneNum: "0533703255",
  },
};

//בדיקה של תקינות סיסמא(מספר אותיות וכזה)
function server(request) {
  if (request.url === "contants" && request.method === "POST") {
    return addPerson(request.name, request.phoneNum);
  }
}



function server(request) {
  if (request.url === "contacts" && request.method === "POST") {
    // לדוגמה בקשה עם שם וסיסמה לבדיקה
    if (!isPasswordValid(request.password)) {
      return { status: 'error', message: 'Invalid password. Must be 6+ characters' };
    }
    return addPerson(request.name, request.phoneNum);
  }
  else if (request.url === "contacts" && request.method === "GET") {
    return getContacts();
  }
  // ניתן להוסיף כאן לוגיקה ל-DELETE, PUT ועוד
  return { status: 'error', message: 'Invalid request' };
}



//בדיקה של תקינות סיסמא(מספר אותיות וכזה)
function server(request) {
  if (request.url === "contants" && request.method === "POST") {
    addPerson(request.payload.name, request.payload.phoneNum);
    //  return document.getElementById("").innerHTML="איש קשר נוסף בהצלחה"
    //זה להודעה שהוספת האיש קשר הצליחה^
  }
}
// server(resuqestNewContants);
