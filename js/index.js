function toptext() {

    var header = "Please take a minute to check out my GitHub.<br>";
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
    if (event.which == 13 || event.keyCode == 13) {
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

function insertresult(result) {
    switch (result) {
        case "--help":
            {
                var insertdata = "github contact reset book blog skills pdf worddoc --help<br>";
                var topdata = document.getElementById("start").innerHTML;
                document.getElementById("start").innerHTML = topdata + insertdata;
                break;
            }
        case "what is your quest?":
            {
                var insertdata = "To seek the Holy Grail!<br>"
                var topdata = document.getElementById("start").innerHTML;
                document.getElementById("start").innerHTML = topdata + insertdata;
                break;
            }
        
        case "button":
            {
                var topdata = document.getElementById("start").innerHTML;
                document.getElementById("start").innerHTML = topdata + "<button type='button' class='btn btn-primary'>Oh shit boi</button><br>";
                break;
            }
            
        default:
            {
                var insertdata = result + ": command not found.<br>";
                var topdata = document.getElementById("start").innerHTML;
                document.getElementById("start").innerHTML = topdata + insertdata;
            }
    }
}
