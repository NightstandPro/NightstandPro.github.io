//Zeigt die Navbar
function Einblenden(){
    var x = document.getElementById("MyLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
}

function NavAnimation(x){
    x.classList.toggle("change");
}

function OpenNavBar(x){
    //Part1
    console.log("Ein/Ausblenden");
    Einblenden();
    console.log("Ein/Ausblenden fertig!");

    //Part2
    console.log("Animation");
    NavAnimation(x);
    console.log("Animation fertig");
}