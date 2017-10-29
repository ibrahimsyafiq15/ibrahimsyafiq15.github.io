function formvalidasi() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var arrival = document.getElementById('arrival').value;
  var destination = document.getElementById('destination').value;
  var date = document.getElementById('date').value;
  var ticket = document.getElementById('ticket').value;
  console.log(name);
  console.log(email);
  if (name == "" && email == "" && phone == "" && arrival == "" && destination == "" && date == "" && ticket == "") {
    console.log("Form Not Valid");
    alert('Please fill the blank!');
  }else{
    console.log("Form Valid");
    document.getElementById('li-name').innerHTML = ("Name : " + name);
    document.getElementById('li-email').innerHTML = ("E-mail : " + email);
    document.getElementById('li-phone').innerHTML = ("Phone : " + phone);
    document.getElementById('li-arrival').innerHTML = ("Arrival : " + arrival);
    document.getElementById('li-destination').innerHTML = ("Destination : " + destination);
    document.getElementById('li-date').innerHTML = ("Date : " + date);
    document.getElementById('li-ticket').innerHTML = ("Amount of Ticket : " + ticket);
    $("#portfolioModal1").modal()
  }
}
