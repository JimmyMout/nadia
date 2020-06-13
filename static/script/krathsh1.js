let minus = document.querySelectorAll("#minus");
let plus = document.querySelectorAll("#plus");


let filters = document.querySelectorAll(".search");
console.log(filters);




for(i of minus){
    console.log(i);

i.onclick = function(){
    let parent = this.parentElement ;
    if(parent.childNodes[5].value >1 ){
        parent.childNodes[5].value--;
    }

}
}

for(i of plus){
    i.onclick = function(){
        let parent = this.parentElement ;
            if(parent.childNodes[5].value >= 10){
                return;
            }
            parent.childNodes[5].value++;
    }
    }

for(i of filters){
    i.onfocusout = function(){
        console.log(this,this.value);
        if(this.value<0 || this.value==="" ){
            this.value=0;
        }

        if(this.value>10){
            this.value = 10;
        }
    }

    i.onblur = function(){
        console.log(this,this.value);
        if(this.value<0 || this.value==="" ){
            this.value=0;
        }

        if(this.value>10){
            this.value = 10;
        }
    }
}

let setAcceptableDates = function(){
    let today = new Date() //.toISOString().slice(0, 10);
    today.setDate(today.getDate() + 2);
    todayStr = today.toISOString().slice(0,10);

    let startd = document.querySelector('#start');
    startd.min = todayStr;
    
    let endd = document.querySelector('#end');

    endd.onfocus = function(){
        let val = startd.value
        console.log("bhma1",val);

        let date = new Date(val);
        console.log("bhma2",date);

        date.setDate(date.getDate() + 1);
        console.log("bhma3",date);

        let newDate = date.toISOString().slice(0, 10);
        console.log("bhma4",newDate);
        endd.min=newDate ;
    }

    endd.onblur = function(){
        // elegxos an exei o user alles krathseis stis hmeromhnies poy eishgage 
        console.log(document.querySelector("#start"));
        console.log(document.querySelector("#end"));
        console.log(document.querySelector("#userId"));

 
        let str = "" + document.querySelector("#start").value +',' + document.querySelector("#end").value +',' + document.querySelector("#userId").value ;
        fetch("/findKrathseisByUserid/" + str).then(
            (lol)=> 
                lol.json().then(
                    (lol)=>
                     {console.log("afto hrthe",lol);
                     if(lol){
                         // set div visible
                         document.querySelector("#foundKrathsh").removeAttribute("hidden");
                     }
                     else{
                        // set div hidden
                        document.querySelector("#foundKrathsh").setAttribute("hidden","true");

                     }

                
                }
                )
            
        )
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    setAcceptableDates();
});

