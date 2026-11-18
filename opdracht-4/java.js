let opium = prompt("in welk jaar ben jij geboren");
let jaar = 2025;

if (opium !== null) {
    document.getElementById("opium").innerHTML =
        "Je bent ongeveer " + (jaar - opium) + " jaar oud"
}
console.log(jaar - opium )