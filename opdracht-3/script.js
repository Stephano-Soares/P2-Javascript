let naam = prompt("Wat is je naam");

function change() {
    let person = prompt ("wat is jouw naam?");
    if (person != null) {
        document.getElementById("naam").innerHTML = "hallo " + person + "  welkom bij mijn eerste JavaScript-pagina!";
    }
}