function openNav() {
    var x = document.getElementById("navegacao");

    if(x.className === navegacao) {
        x.className += "menujs";
        document.getElementById("threeline-icon").innerHTML = "&Cross;";
    }

    else {
        x.className = "navegacao";
        document.getElementById("threeline-icon").innerHTML = "&equiv;";
    }
}