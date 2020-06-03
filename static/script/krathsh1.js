let minus = document.querySelectorAll("#minus");
let plus = document.querySelectorAll("#plus");


let filters = document.querySelectorAll(".search");
console.log(filters);

let but_search = document.querySelector("button.search1");
but_search.onclick = function(){
    location.href="?page=krathsh2";
}


for(i of minus){
    console.log(i);

i.onclick = function(){
    let parent = this.parentElement ;
    if(parent.childNodes[4].value >0 ){
        parent.childNodes[4].value--;
    }

}
}

for(i of plus){
    i.onclick = function(){
        let parent = this.parentElement ;
            if(parent.childNodes[4].value >= 10){
                return
            }
            parent.childNodes[4].value++;
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
}

