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
let availableRooms ;
let xwrhtikothta ;
let xwrht_xrhsth = 0;




let renderRooms = (json) => {
    availableRooms= json.rooms ;

    let roomDiv = document.querySelector('.room');
    console.log("EFTASA STO RENDER ROOMS");
    for (let room of json.rooms) {
        //document.querySelector("ul").appendChild(createTaskItem(room));
        //console.log(room.photo); αρα είναι διαθέσιμα τα attributes του object 

        let div = roomDiv.cloneNode(true);
        div.querySelector("#photo").src=room.photo ; // room.photo otan baloume fwtografies
        div.querySelector("#roomName").textContent=room.kathgoria;
        div.querySelector("#perigrafh").textContent=room.perigrafh;
        div.querySelector("#price").textContent=room.kostos_brady;
        div.querySelector("#xwrhtikothta").textContent=room.xwrhtikothta;
        div.removeAttribute("hidden");


        document.querySelector('#form_kathgories').value+= room.kathgoria + ',';
        document.querySelector('#form_posa_dwmatia').value+= '0' + ',';
        document.querySelector('#form_kostos').value+= room.kostos_brady + ',';

        div.querySelector("#epilogh_dwmatiou").onclick = function(){
            // θα φτιάχνει ενα li που θα μπαίνει στο modal και 
            // θα αυξάνει την κατάλληλη θέση του πόσα_δωμάτια κατά 1 
            // θα αυξάνει την χωρητικότητα που καλύπτει ο πελάτης με τις επιλογές δωματίων
            // και θα βάζει κατάλληλη συνάρτηση στο αφαίρεση button του list-item

            let li1 = document.querySelector("#chosenRoom");
            let li = li1.cloneNode(true);
            console.log(li1,li);
            li.querySelector("#room_name_span").innerText = room.kathgoria ;
            li.removeAttribute("hidden");

            xwrht_xrhsth += room.xwrhtikothta;
            let badge = Number(document.querySelector(".badge").innerText);
            badge ++ ;
            document.querySelector(".badge").innerText=badge ;


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
            let index = room.id_kathgorias - 1 ;
            array[index] ++ ;
            document.querySelector('#form_posa_dwmatia').value = array.join(',');
            console.log("h lista me ta posa dwmatia apo kathe eidos",document.querySelector('#form_posa_dwmatia').value);

            document.querySelector("#chosenRoomslist").appendChild(li);

            li.querySelector("#afairesh_span_button").onclick = function(){
                document.querySelector("#chosenRoomslist").removeChild(li);
                let array = document.querySelector('#form_posa_dwmatia').value.split(',');
                let index = room.id_kathgorias - 1 ;
                array[index] -- ;
                document.querySelector('#form_posa_dwmatia').value = array.join(',');


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


window.addEventListener('DOMContentLoaded', (event) => {
    clearValues();
    fetchRooms();
    xwrhtikothta = document.querySelector("#synolika_atoma").value ;
    console.log(xwrhtikothta);
});

