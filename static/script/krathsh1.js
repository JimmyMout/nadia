let minus = document.querySelectorAll("#minus");
let plus = document.querySelectorAll("#plus");


let filters = document.querySelectorAll(".search");
console.log(filters);

let but_search = document.querySelector("button.search1");
but_search.onclick = function(){
    location.href="/krathsh2";
}


for(i of minus){
    console.log(i);

i.onclick = function(){
    let parent = this.parentElement ;
    if(parent.childNodes[5].value >0 ){
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
    let today = new Date().toISOString().slice(0, 10);
    console.log(today + 2);
    let startd = document.querySelector('#start');
    startd.min = today;
    
    let endd = document.querySelector('#end');

    endd.onfocus = function(){
        let val = startd.value
        endd.min=val ;
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    setAcceptableDates();
});

