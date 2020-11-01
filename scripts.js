var starter=function(){
   var entry = document.getElementById("email");
   document.getElementsByClassName("btn")[1].onclick=function(e){
        var input = entry.value;
        if (input == "") {
            document.getElementsByClassName("message")[0].innerHTML = "Please enter a valid email address.";
        } 
        else {
            document.getElementsByClassName("message")[0].innerHTML = "Thank you! Your email address " +input + " has been added to our mailing list!";
        }
        e.preventDefault();
    }
}

window.onload=starter;