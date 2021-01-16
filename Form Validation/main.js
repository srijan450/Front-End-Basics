let obj = {
    show: false,
    sex: false,
    pas: false,
    na: false,
    count: 0,
};
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("submit").addEventListener("click", Validate);
    function Validate() {
        let gen = document.getElementsByName("Gender");
        for (let i = 0; i < gen.length; i++) {
            if (gen[i].checked) {
                obj["sex"] = true;
                let gender = document.getElementById("genError");
                gender.innerHTML = "Accepted";
                gender.style.color = "green";

            }
        }
        let dob = document.getElementById("date");
        let gender = document.getElementById("dateError");
        if (dob.value) {
            gender.innerHTML = "Accepted";
            gender.style.color = "green";
        }
        if (!obj["na"]) {
            let name_err = document.getElementById("NameError");
            name_err.innerHTML = "Invalid Name";
            name_err.style.color = "red";
        }

        else if (!obj["sex"]) {
            let gender = document.getElementById("genError");
            gender.innerHTML = "Please select!!";
            gender.style.color = "red";
        }
        else if (!dob.value) {
            let gender = document.getElementById("dateError");
            gender.innerHTML = "Please select!!";
            gender.style.color = "red";
        }
        else if (!obj["pas"]) {
            let name_err = document.getElementById("passError");
            name_err.innerHTML = "Invalid Password";
            name_err.style.color = "red";
        }
        else {
            alert("Successfully submitted form");
        }

    }


    document.getElementById("name").addEventListener("keypress", Valid_Name);
    document.getElementById("name").addEventListener("blur", Valid_Name);
    function Valid_Name() {
        let name = document.getElementById("name").value;
        let regexName = /^[a-z A-Z]{2,100}$/;
        let name_err = document.getElementById("NameError");
        if (!regexName.test(name)) {
            name_err.innerHTML = "Invalid Name";
            name_err.style.color = "red";
        }
        else {
            name_err.innerHTML = "Accepted";
            name_err.style.color = "green";
            obj["na"] = true;
        }
    }
    document.getElementById("pass").addEventListener("keypress", Valid_Pass);
    document.getElementById("pass").addEventListener("blur", Valid_Pass);
    function Valid_Pass() {
        let name = document.getElementById("pass").value;
        let regexName = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        let name_err = document.getElementById("passError");
        if (!regexName.test(name)) {
            name_err.innerHTML = "Invalid Password";
            name_err.style.color = "red";
        }
        else {
            name_err.innerHTML = "Accepted";
            name_err.style.color = "green";
            obj["pas"] = true;
        }
    }

    document.getElementById("show").addEventListener("click", show);
    function show() {
        if (!obj["show"]) {
            document.getElementById("pass").type = "text";
            document.getElementById("show").innerHTML = "Hide";
            obj["show"] = true;
        }
        else {

            document.getElementById("pass").type = "password";
            document.getElementById("show").innerHTML = "Show";
            obj["show"] = false;
        }

    }
}
);