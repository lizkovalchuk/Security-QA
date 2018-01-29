"use strict";

window.onload = function () {

    function button1() {
        var userName = document.getElementById("loginForm__input_name").value;
        var passWord = document.getElementById("loginForm__input_password").value;
        console.log(userName);

        function changeLabels() {
            document.getElementById("output__name").innerHTML = "User name: " + userName;
            document.getElementById("ouput__password").innerHTML = "Password: " + passWord;

        //add if statement to onfocus

            if (userName === "") {
                document.getElementById("loginForm__input_name").focus();
            }

            if (passWord === "") {
                document.getElementById("loginForm__input_password").focus();
            }

        }
        changeLabels();
        return false;
    }
    document.forms.loginForm.onsubmit = button1;
}; //end of onload function