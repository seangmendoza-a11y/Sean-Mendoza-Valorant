function yes() {
    document.getElementById("message").innerHTML =
        "Welcome, Radiant!";

    document.getElementById("no-response").style.display = "none";

    setTimeout(function() {
        window.location.href = "homepage.html";
    }, 2000);
}

function no() {
    document.getElementById("message").innerHTML = "";

    document.getElementById("no-response").style.display = "block";
}

function goToHome() {
    window.location.href = "homepage.html";
}