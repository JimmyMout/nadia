// let f1 = document.querySelector(".forma1");
// let f2 = f1.cloneNode(true);

// let but_search = document.querySelector("button.search1");
// console.log(but_search);
// console.log(f1);
// console.log(f2);

// let but_search = document.querySelector("button.search1");
// but_search.onclick = function(){
//     location.href="krathsh2.html";
// }
var availableRooms = [] ;
let xwrhtikothta ; // η χωρητικότητα που απαιτείται σύμφωνα με τα άτομα που έχει δηλώσει ο χρήστης
let xwrht_xrhsth = 0; // πόσα άτομα καλύπτει ανάλογα με τα δωμάτια που έχει επιλέξει
var chosenRooms = 0 ;



let renderRooms = (json) => {
    availableRooms= json.rooms ;

    let roomDiv = document.querySelector('.room');
    console.log("EFTASA STO RENDER ROOMS");

    for (let room of json.rooms) {
        document.querySelector('#form_kathgories').value+= room.kathgoria + ',';
        document.querySelector('#form_posa_dwmatia').value+= '0' + ',';
        document.querySelector('#form_kostos').value+= room.kostos_brady + ',';
        
        }

        if(document.querySelector("#tropopoihsh_krathshs_id").value != ''){
            create_hdh_epilegmena();
           }


    for (let room of json.rooms) {
        console.log(room);
        if(room.plhthos==0){
            continue;
        }
        //document.querySelector("ul").appendChild(createTaskItem(room));
        //console.log(room.photo); αρα είναι διαθέσιμα τα attributes του object 

        let div = roomDiv.cloneNode(true);
        div.querySelector("#photo").src=room.photo ; // room.photo otan baloume fwtografies
        div.querySelector("#roomName").textContent=room.kathgoria;
        div.querySelector("#perigrafh").textContent=room.perigrafh;
        div.querySelector("#price").textContent=room.kostos_brady;
        div.querySelector("#xwrhtikothta").textContent=room.xwrhtikothta;
        div.removeAttribute("hidden");

        let infoBtn = document.querySelector(".info_blue").cloneNode(true);
        infoBtn.onclick = function(){
            document.querySelector("#mmodal").style.display = "block";
        }
        infoBtn.removeAttribute("hidden");
        div.querySelector(".btn_area").appendChild(infoBtn);


        // document.querySelector('#form_kathgories').value+= room.kathgoria + ',';
        // document.querySelector('#form_posa_dwmatia').value+= '0' + ',';
        // document.querySelector('#form_kostos').value+= room.kostos_brady + ',';

        div.querySelector("#epilogh_dwmatiou").onclick = function(){
            // θα φτιάχνει ενα li που θα μπαίνει στο modal και 
            // θα αυξάνει την κατάλληλη θέση του πόσα_δωμάτια κατά 1 
            // θα αυξάνει την χωρητικότητα που καλύπτει ο πελάτης με τις επιλογές δωματίων
            // και θα βάζει κατάλληλη συνάρτηση στο αφαίρεση button του list-item

            
            if( chosenRooms == 10){
                document.querySelector("#div10rooms").style.display="inline-block";
                console.log("egine to 10 rooms periorismos",document.querySelector("#div10rooms"));
                // document.querySelector("#div10rooms").removeAttribute("hidden");
                return ;
            }
            chosenRooms++;
            let li1 = document.querySelector("#chosenRoom");
            let li = li1.cloneNode(true);
            console.log(li1,li);
            li.querySelector("#room_name_span").innerText = room.kathgoria ;
            li.removeAttribute("hidden");

            xwrht_xrhsth += room.xwrhtikothta;
            let badge = Number(document.querySelector(".badge").innerText);
            badge ++ ;
            document.querySelector(".badge").innerText=badge ;

            // otan den yparxoun alla diathesima dwmatia gia ekeines tis hmeromhnies 
            // na eksafanizontai apo tis epiloges tou xrhsth 

            let index1 = room.id_kathgorias_dwm - 1 ;
            availableRooms[index1].plhthos -- ;
            if(availableRooms[index1].plhthos == 0){
                div.setAttribute("hidden","true");
            }

            if(xwrht_xrhsth >= xwrhtikothta){
               document.querySelector("div.kalathi button").style.backgroundColor = "lightgreen" ;
               document.querySelector("#oloklhr_krathshs").style.backgroundColor = "lightgreen" ;
               document.querySelector("#oloklhr_krathshs").removeAttribute('disabled') ;
            }
            else{
                document.querySelector("div.kalathi button").style.backgroundColor = "red" ;
                document.querySelector("#oloklhr_krathshs").style.backgroundColor = "red" ;
            }

            let array = document.querySelector('#form_posa_dwmatia').value.split(',');
            let index = room.id_kathgorias_dwm - 1 ;
            array[index] ++ ;
            document.querySelector('#form_posa_dwmatia').value = array.join(',');
            console.log("h lista me ta posa dwmatia apo kathe eidos",document.querySelector('#form_posa_dwmatia').value);

            document.querySelector("#chosenRoomslist").appendChild(li);

            li.querySelector("#afairesh_span_button").onclick = function(){
                document.querySelector("#chosenRoomslist").removeChild(li);
                let array = document.querySelector('#form_posa_dwmatia').value.split(',');
                let index = room.id_kathgorias_dwm - 1 ;
                array[index] -- ;
                document.querySelector('#form_posa_dwmatia').value = array.join(',');

                chosenRooms--;
                if(chosenRooms<=10){
                    document.querySelector("#div10rooms").style.display="none";
                }


                xwrht_xrhsth -= room.xwrhtikothta;
                let badge = Number(document.querySelector(".badge").innerText);
                if(badge >0){
                badge -- ;}
                document.querySelector(".badge").innerText=badge ;

                if(xwrht_xrhsth < xwrhtikothta){
                    document.querySelector("div.kalathi button").style.backgroundColor = "red" ;
                    document.querySelector("#oloklhr_krathshs").style.backgroundColor = "red" ;
                    document.querySelector("#oloklhr_krathshs").setAttribute('disabled',"true") ;
                 }

                 let index1 = room.id_kathgorias_dwm - 1 ;
                 availableRooms[index1].plhthos ++ ;
                 if(availableRooms[index1].plhthos > 0){
                     div.removeAttribute("hidden");
                 }
            }



        }

        document.querySelector('.room_area').appendChild(div);
        document.querySelector('.room_area').appendChild(document.createElement("br"));  
    }

    console.log( "AFTO DHMIOURGHTHIKE STO VALUE TOU INPUT KATHGORIES DWMATIWN ",document.querySelector('#form_kathgories').value);
}

let clearValues = function(){ 
    // katharizei ta pedia value twn input ths formas poy paei pros to krathsh3 giati
    // an ksanafortwnetai h selida h fetchRooms() ta ksanagemizei me peritta pragmata
    document.querySelector('#form_kathgories').value= '';
    document.querySelector('#form_posa_dwmatia').value= '';
    document.querySelector('#form_kostos').value= '';
}


let fetchRooms = () => {
    let startd = document.querySelector(".startd").getAttribute("value");
    let endd = document.querySelector(".endd").getAttribute("value");
    console.log(startd , endd,startd - endd );
    fetch("/fetchRooms" +'/?startd='+ startd +'&endd='+endd).then(  //oxi to tasks.json to url /tasks
            (rooms) => {
                //console.log("EFTASAA STO RESOLVE TOU FETCH",rooms.json()); // na doume se ti morfh ftanoun edw ta rooms
                rooms.json().then(
                    (json) => renderRooms(json)
                )
            }

        // //διάβασε την απάντηση σαν json
        // (response) => response.json().then(
        //     //δώσε την εγγραφή "tasks" για προβολή στην οθόνη
        //     (json) => renderRooms(json)
        )
    
}

let createInfoModals = function(){
    // Get the modal
var modal2 = document.getElementById("mmodal");

// Get the button that opens the modal
var btn2 = document.querySelector(".info_blue");
console.log(btn2);

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("mclose")[0];
console.log("AAAAAAAAAAAAAAAAAA",modal2,btn2,span2);
// When the user clicks on the button, open the modal

btn2.onclick = function() {
    console.log("EGINA");
    // i.style.backgroundColor="red";
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
// }
window.onclick = function(event) {
    console.log("EGINA TO CLICK OUt");
    if ( event.target == document.querySelector("#div10rooms" )  ) {
        document.querySelector("#div10rooms").style.display="none";
    //   document.querySelector("#div10rooms").setAttribute("hidden","true");
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
      }

    if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
      }

    
  }

}

let create_hdh_epilegmena = function(){
    //bazei sta strings epolegmena tis katallhles times kai ta li sto kalathi kai allazei edw sto
    // krathshs2.js tis global metablhtes

    console.log("EKTELEITAI H CREATE_HDH_EPILEGMENA")
    let hdh_epilegmena_str = document.querySelector("#hdh_epilegmena").value ;
    console.log("AFTO EFTASE STO CREATE_HDH_EPILEGMENA",hdh_epilegmena_str);
    let desmefseis = hdh_epilegmena_str.split(',');
    console.log("AFTES EINAI OI DESMEFSEIS",desmefseis);
    console.log("PWS BRISKEI TO POSA DWMATIA H CREATE HDH EPILEGMENA",document.querySelector('#form_posa_dwmatia').value);


    for(let i of desmefseis){
        let j = i.split(':');
        console.log("TO J GINETAI ",j);
        let id_kathgorias_dwm = Number(j[0]);
        let posa_dwmatia = Number(j[2]);
        let kathgoria = j[1];
        let xwrhtikothta_kathgorias = Number(j[3]);

        for(let k=0;k<posa_dwmatia;k++){


            chosenRooms++;
            let li1 = document.querySelector("#chosenRoom");
            let li = li1.cloneNode(true);
            console.log(li1,li);
            li.querySelector("#room_name_span").innerText = kathgoria ;
            li.removeAttribute("hidden");

            xwrht_xrhsth += xwrhtikothta_kathgorias;
            let badge = Number(document.querySelector(".badge").innerText);
            badge ++ ;
            document.querySelector(".badge").innerText=badge ;

            // otan den yparxoun alla diathesima dwmatia gia ekeines tis hmeromhnies 
            // na eksafanizontai apo tis epiloges tou xrhsth 

            let index1 = id_kathgorias_dwm - 1 ;
            // availableRooms[index1].plhthos -- ;
            // if(availableRooms[index1].plhthos == 0){
            //     div.setAttribute("hidden","true");
            // }

            if(xwrht_xrhsth >= xwrhtikothta){
               document.querySelector("div.kalathi button").style.backgroundColor = "lightgreen" ;
               document.querySelector("#oloklhr_krathshs").style.backgroundColor = "lightgreen" ;
               document.querySelector("#oloklhr_krathshs").removeAttribute('disabled') ;
            }
            else{
                document.querySelector("div.kalathi button").style.backgroundColor = "red" ;
                document.querySelector("#oloklhr_krathshs").style.backgroundColor = "red" ;
            }

            let array = document.querySelector('#form_posa_dwmatia').value.split(',');
            console.log("PWS BRISKEI TO POSA DWMATIA H CREATE HDH EPILEGMENA",document.querySelector('#form_posa_dwmatia').value,array);
            let index = id_kathgorias_dwm - 1 ;
            array[index] ++ ;
            document.querySelector('#form_posa_dwmatia').value = array.join(',');
            console.log("h lista me ta posa dwmatia apo kathe eidos",document.querySelector('#form_posa_dwmatia').value);

            document.querySelector("#chosenRoomslist").appendChild(li);

            li.querySelector("#afairesh_span_button").onclick = function(){

                document.querySelector("#chosenRoomslist").removeChild(li);
                let array = document.querySelector('#form_posa_dwmatia').value.split(',');
                let index = id_kathgorias_dwm - 1 ;
                array[index] -- ;
                document.querySelector('#form_posa_dwmatia').value = array.join(',');

                chosenRooms--;
                if(chosenRooms<=10){
                    document.querySelector("#div10rooms").style.display="none";
                }


                xwrht_xrhsth -= xwrhtikothta_kathgorias;
                let badge = Number(document.querySelector(".badge").innerText);
                if(badge >0){
                badge -- ;}
                document.querySelector(".badge").innerText=badge ;

                if(xwrht_xrhsth < xwrhtikothta){
                    document.querySelector("div.kalathi button").style.backgroundColor = "red" ;
                    document.querySelector("#oloklhr_krathshs").style.backgroundColor = "red" ;
                    document.querySelector("#oloklhr_krathshs").setAttribute('disabled',"true") ;
                 }

                 let index1 = id_kathgorias_dwm - 1 ;
                //  availableRooms[index1].plhthos ++ ;
                //  if(availableRooms[index1].plhthos > 0){
                //      div.removeAttribute("hidden");
                //  }
            }






        }


    }


}

window.addEventListener('DOMContentLoaded', (event) => {
    clearValues();
    createInfoModals();
    // prin pame sto krathsh3 to input hdh_epilegmena tha katharizetai kai to input krathsh_id STO CLEARVALUES
    fetchRooms();

    xwrhtikothta = document.querySelector("#synolika_atoma").value ;
    console.log(xwrhtikothta);

    console.log(document.querySelector("#tropopoihsh_krathshs_id").value);

});

