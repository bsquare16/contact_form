function validate () {
    var name = document.getElementById("name").Value;
    var subject = document.getElementById("subject").Value;
    var phone = document.getElementById(phone).value;
    var email = doucment.getElementById(email).value;
    var message = doument.getElementById (message).value;
    var error_message = document.getElementById ("error_message");

    error_message.style.padding = "10px";

    var text;

    if (name.length < 5) {
        text = "please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if (subject.length< 10) {
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;

    }

    if(isNaN(phone) || phone.length != 11) {
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;
        
    }

    if (email.index0f("@"))
}
