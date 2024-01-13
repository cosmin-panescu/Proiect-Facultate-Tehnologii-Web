function addZero(x) {
    if (x < 10) return "0" + x;
    else return x;
}

function generareNrAleator(min, max) {
    return Math.random() * (max-min) + min;
}

// AFISARE LA INCARCAREA SITE-ULUI
window.onload = function() {
    // NUMELE + GRUPA + ORA
    let data = new Date();
    let pgf = document.createElement("p");
    let oraCurenta = addZero(data.getHours()) + ":" + addZero(data.getMinutes()) + ":" + addZero(data.getSeconds());
    pgf.innerHTML = `Panescu Vasile-Cosmin | 203 | ${oraCurenta}`;
    pgf.style.color = "white";
    document.body.insertBefore(pgf, document.body.firstElementChild);

    // tabelul
    var tabel = document.getElementById('tabel-carti');
    var tbody = tabel.getElementsByTagName("tbody")[0];
    var randuri = tbody.getElementsByTagName("tr");

    for (let rand of randuri) {
        let td_uri = rand.children;
        let td_pret = td_uri[4];

        if (parseFloat(td_pret.innerHTML) == 0) {
            td_pret.innerHTML = generareNrAleator(15, 65).toFixed(3);
        }
    }
}

// ALERTA CU DATA
document.getElementById('afiseazaData').onclick = function() {
    let data = new Date();
    var numeZile = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata", "Duminica"];
    var numeLuni = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
    
    var numeZi = numeZile[data.getDay() - 1];
    var numeLuna = numeLuni[data.getMonth()];
    var dataFormatata = `${data.getFullYear()}, ${numeLuna}, ${numeZi}:${data.getDate()}`;
    
    alert(dataFormatata);
}

// MARCARE RANDURI TABEL
document.getElementById("marcheaza_randuri").onclick = function() {

        var tabel = document.getElementById("tabel-carti");
        var tbody = tabel.getElementsByTagName("tbody")[0];
        var randuri = tbody.children;
        
        for (let rand of randuri) {
            let td_autor = rand.children[1];
            
            if (td_autor.innerHTML == "Florin Preda") {
                if (rand.style.backgroundColor == "purple") {
                    rand.style.backgroundColor = "";
                    this.innerHTML = "Marcheaza Carti Florin Preda";
                } else {
                    rand.style.backgroundColor = "purple";
                    this.innerHTML = "Scoate marcajul"
                }
            } 
        }
}

// NUMARA RANDURILE TABELULUI
document.getElementById("numara_randuri").onclick = function() {
    var tbody = document.getElementById("body-tabel-carti");
    var numarRanduri = tbody.getElementsByTagName("tr").length;

    alert("Numarul de randuri din tabel este: " + numarRanduri);
};