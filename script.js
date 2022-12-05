function data() {
  var numEle = document.getElementById("no").value,
    nameEle = document.getElementById("name").value,
    ageEle = document.getElementById("age").value,
    paraEle = document.getElementById("para");
  nameEle = nameEle.trim();
  nameEle = nameEle.split(" ").join("");
  if (numEle == "") {
    paraEle.innerHTML = "Please Enter The All Details";
  } 
  else {
    var html = "";

    html =
      "<tr><td>" +
      numEle +
      "</td><td>" +
      nameEle +
      "</td><td>" +
      ageEle +
      "</td></tr>";

    document.getElementById("bind").innerHTML += html;

    document.getElementById("no").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
  }
}
