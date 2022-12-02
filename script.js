function data() {
    var numEle = document.getElementById("no").value,
  nameEle = document.getElementById("name").value,
  ageEle = document.getElementById("age").value,
  paraEle = document.getElementById("para");

  if (numEle == "" || nameEle == "" || ageEle == "") {
    paraEle.innerHTML = "Please Enter The Details Correctly";
  } 
  else {
    		var html="";

		html="<tr><td>"+numEle+"</td><td>"+nameEle+"</td><td>"+ageEle+"</td></tr>";

		document.getElementById('bind').innerHTML+=html;

		document.getElementById('no').value="";
		document.getElementById('name').value="";
		document.getElementById('age').value="";
  }
}
