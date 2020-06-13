let input = document.querySelector("#username") ;
let uniue_username_div = document.querySelector("#uniqueusernamediv")

input.onblur = function(){
    let val = input.value ;

    fetch("/username/" + val ).then(
        (unique) => unique.json().then(
            (unique)=>{
                console.log("afto ftanei ston client sto fetch", unique);
                if(unique){
                    uniue_username_div.setAttribute("hidden","true");
                }
                else{
                    
                    uniue_username_div.removeAttribute("hidden");
                }
            }
        )
    )
}

let input_email = document.querySelector("#inputEmail") ;
let uniue_email_div = document.querySelector("#uniqueemaildiv") ;
input_email.onblur = function(){
    let val = input_email.value ;

    fetch("/uniqueEmail/" + val ).then(
        (unique) => unique.json().then(
            (unique)=>{
                console.log("afto ftanei ston client sto fetch", unique);
                if(unique){
                    uniue_email_div.setAttribute("hidden","true");
                }
                else{
                    
                    uniue_email_div.removeAttribute("hidden");
                }
            }
        )
    )
}