
let renderStoixeiaKrathshs = function (){
    // briskei kai kanei render dianyktereyseis , epilegmenes kathgories dwmatia kai kosth
    let krathsh = '';
    if(document.querySelector("#tropopoihsh_krathshs_id").value != ''){
        krathsh += document.querySelector("#tropopoihsh_krathshs_id").value + ',' ;
    }
    else{
        krathsh +=  ' ,' ;
    }
    // krathsh += document.querySelector("#tropopoihsh_krathshs_id").value + ',' ;
    krathsh += document.querySelector("#hidden_userId").value + ','; // id_pelath 
    krathsh += " ,"; // kwdikos
    krathsh += document.querySelector("#startd").value +"," ;
    krathsh += document.querySelector("#endd").value +"," ;

    let startd = document.querySelector("#startd").value;
    let endd = document.querySelector("#endd").value;
    console.log(startd,endd);

    startd = new Date(startd);
    endd = new Date(endd);
    console.log(startd,endd);

    let diffTime = Math.abs(endd - startd);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.querySelector("#bradia").innerText = diffDays ;

    console.log("AFTA YPARXOUUN STA AORATA INPUT",document.querySelector("#epil_kathgories").value,document.querySelector("#epil_dwmatia").value)


    let epil_kathgories = document.querySelector("#epil_kathgories").value.split(',');
    let epil_dwmatia = document.querySelector("#epil_dwmatia").value.split(',');
    let kosth = document.querySelector("#epil_kosth").value.split(',');

    console.log(document.querySelector("#epil_kathgories").value,document.querySelector("#epil_dwmatia").value,kosth)

    console.log("AFTA DIABAZEI APO TA AORATA INPUT",epil_dwmatia,epil_kathgories,kosth);

    let input = document.createElement("input");
    input.name="dwmatia_desmefsh";
    input.setAttribute("hidden","true");
    input.type="text";

    for(let i in epil_dwmatia){
        let room = epil_kathgories[i] + ': ' + epil_dwmatia[i];
        let li = document.createElement("li");
        li.textContent = room.replace(/_/g, ' ') ;

        document.querySelector("#lista_dwmatiwn").appendChild(li);

        // sxhmatismos eggrafwn gia desmefsh_dwmatiwn
        input.value += room + ','
        
        

    }

    console.log("afto to input gia desmefsh dwmatiwn prostethike" ,input.value);

    document.querySelector("#telikh_forma").appendChild(input)
    let synoliko_kostos = 0 ;

    for(let j in epil_dwmatia){
        synoliko_kostos+= epil_dwmatia[j]*kosth[j];

    }
    synoliko_kostos *= diffDays ;

    let pontoi = Math.ceil(synoliko_kostos/10) ;

    document.querySelector("#pontoi").innerText = pontoi ;

    krathsh += synoliko_kostos +',' ;
    krathsh += '1,'; // katastash 

    krathsh += 'pistwtikh'+',' ;
    krathsh += document.querySelector("#atoma").value;
    krathsh += pontoi ;

    console.log("oloklhrh h krathsh kai grafetai sto teliko input", krathsh);
    document.querySelector("#eggrafh_krathshs").value = krathsh ;

    document.querySelector("#synoliko_kostos").textContent = synoliko_kostos + " ";

}

let renderUser = function(json){
    // symplhrwnei thn forma sta aristera me ta stoixeia tou eggegrammenou xrhsth 
    console.log(json.user[0]);
    let user1 = json.user[0];

    document.querySelector("#form_onoma").value = user1.onoma ;
    document.querySelector("#form_epwnymo").value = user1.epwnymo ;
    document.querySelector("#form_email").value = user1.email ;
    document.querySelector("#form_xwra").value = user1.xwra ;
    document.querySelector("#form_xwra").innerText = user1.xwra ;
    document.querySelector("#form_onoma_addr").value = user1.onoma_addr ;
    document.querySelector("#form_arithmos_addr").value = user1.arithmos_addr ;
    document.querySelector("#form_tk").value = user1.tk;
    document.querySelector("#form_polh").value = user1.polh ;
    document.querySelector("#form_thlefwno").value = user1.thlefwno ;
 
}


let fetchUser = function(userId){
    fetch('/user' +'?user='+ userId).then(
        (user) => user.json().then(
            (userJson) => renderUser(userJson)
        )
    );
}

let clearStoixeiaKrathshs = function(){
    console.log("ektelesthke h clearstoixeia krathsh");
    document.querySelector("#epil_kathgories").value = '';
    document.querySelector("#epil_dwmatia").value = '';
    document.querySelector("#epil_kosth").value = '';
}

window.addEventListener('DOMContentLoaded', (event) => {
    //clearStoixeiaKrathshs();
    console.log("TO USERID EINAI",document.querySelector("#hidden_userId").value);
    fetchUser(document.querySelector("#hidden_userId").value);
    renderStoixeiaKrathshs();

 
});