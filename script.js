var First_label = document.createElement("label");
First_label.setAttribute("for","Firstname")
First_label.innerHTML="Firstname";

var break1 = document.createElement("br");

var First_input = document.createElement("input");
First_input.setAttribute("type","text");
First_input.setAttribute("name","Firstname");
First_input.setAttribute("id","Firstname");

var break2 = document.createElement("br");

var Middle_label = document.createElement("label");
Middle_label.setAttribute("for","Middlename")
Middle_label.innerHTML="Middlename"

var break3 = document.createElement("br");

var Middle_input = document.createElement("input");
Middle_input.setAttribute("type","text");
Middle_input.setAttribute("name","Middlename");
Middle_input.setAttribute("id","Middlename");

var break4 = document.createElement("br");

var Last_label = document.createElement("label");
Last_label.setAttribute("for","Lastname")
Last_label.innerHTML="Lastname"

var break5 = document.createElement("br");

var Last_input = document.createElement("input");
Last_input.setAttribute("type","text");
Last_input.setAttribute("name","Lastname");
Last_input.setAttribute("id","Lastname");

var break6 = document.createElement("br");

var email_label = document.createElement("label");
email_label.setAttribute("for","email")
email_label.innerHTML="email"

var break7 = document.createElement("br");

var email_input = document.createElement("input");
email_input.setAttribute("type","email");
email_input.setAttribute("name","email");
email_input.setAttribute("id","email");

var break8 = document.createElement("br");

var button = document.createElement("button");
button.setAttribute("type","button")
button.setAttribute("onclick","foo()")
button.innerHTML="submit"
document.body.append(First_label,break1,First_input,break2,Middle_label,break3,Middle_input,break4,Last_label,break5,Last_input,break6,email_label,break7,email_input,break8,button);

function foo(){
  var First = document.getElementById("Firstname").value;
  console.log(`Firstname:${First}`)

  var Middle = document.getElementById("Middlename").value;
  console.log(`Middlename:${Middle}`)

  var Last = document.getElementById("Lastname").value;
  console.log(`Lastname:${Last}`)

  var email = document.getElementById("email").value;
  console.log(`Email:${email}`)
}

