//בדיקה של תקינות סיסמא(מספר אותיות וכזה)
function server(request) {
  if (request.url === "contants" && request.method === "POST") {
    addPerson(request.payload.name, request.payload.phoneNum);
    //  return document.getElementById("").innerHTML="איש קשר נוסף בהצלחה"
    //זה להודעה שהוספת האיש קשר הצליחה^
  }
}
// server(resuqestNewContants);
