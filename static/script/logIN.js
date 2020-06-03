let butli = document.querySelector("#log-in-button");
let modal = document.querySelector("#log-in-modal");


butli.onclick = function() {
    modal.style.display="block";
}

let sp = document.createElement("span");
sp.class="close";
sp.textContent="X";
sp.style.position= "absolute";
sp.style.top= "50px";
sp.style.right="100px";
sp.style.color= "#f1f1f1";
sp.style.fontSize= "40px";
sp.style.fontWeight= "bold";
sp.style.transition= "0.3s"
sp.style.cursor= "pointer";
sp.style.textEmphasis ;
console.log(sp);

modal.appendChild(sp);
sp.onclick = function() { 
    modal.style.display = "none";
  }

