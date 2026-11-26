const  something = document.getElementById("something");

function kleur_aanpassen() {
    document.getElementById("something").innerText = "Inhoud aangepast!"
   something.style.color = "blue";
   console.log("Hallo!");
}

kleur_aanpassen();