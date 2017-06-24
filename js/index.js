"use strict";

function toptext() {

    var header = "John Doe<br>";
    header = header + "GitHub: <a href='https://github.com/skyroor'>Skyroor</a><br>";

    document.getElementById("start").innerHTML = header;

}

function editable() {
    document.getElementById("editable").focus();
}

function codetext() {
    document.getElementById("command").innerHTML = "<p class='important'>visitor@griffco</p>:~ $";
}

function giveninput(event) {
    if (event.which === 13 || event.keyCode === 13) {
        var topdata = document.getElementById("start").innerHTML + document.getElementById("command").innerHTML;
        var getresultfor = document.getElementById("editable").innerText;
        getresultfor = getresultfor.slice(0, -2);
        console.log(getresultfor);
        document.getElementById("editable").innerHTML = '';
        document.getElementById("start").innerHTML = topdata + getresultfor + "<br>";
        insertresult(getresultfor);
        editable();
    }
}

function showresult(insertdata) {
    var topdata = document.getElementById("start").innerHTML;
    document.getElementById("start").innerHTML = topdata + insertdata;
}

function insertresult(result) {
    switch (result) {
        case "--help":
            {
                var insertdata = "github contact reset book blog skills pdf worddoc --help<br>";
                showresult(insertdata);
                break;
            }

        case "exp":
            {
                var insertdata = "[2016 - Present] IT Consultant / Web Designer<br>";
                var insertdata = insertdata + "[2015 - Present] Studying for degree in Computer Science.<br>";
                showresult(insertdata);
                break;
            }

        case "what is your quest?":
            {
                var insertdata = "To seek the Holy Grail!<br>"
                showresult(insertdata);
                break;
            }

        case "button":
            {
                var insertdata = "<button type='button' class='btn btn-primary'>Oh shit boi</button><br>";
                showresult(insertdata);
                break;
            }

        default:
            {
                var error = result + ": command not found.<br>";
                showresult(error);
            }
    }
}
