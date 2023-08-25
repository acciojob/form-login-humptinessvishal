function getFormvalue() {
    //Write your code here
	const form = document.getElementById("form1");
	const first = form["fname"].value;
	const last = form["lname"].value;
	alert(`${first} ${last}`);
}