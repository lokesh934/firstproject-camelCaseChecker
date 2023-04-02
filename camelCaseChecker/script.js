function checkCamelCase(){
    let name=document.getElementById("search").value;
    let shiftName=name.split("").shift();
    if(name===""){
        alert("Please enter the text")
    }
    else if(/[A-Z]/.test(name)){
        ans.innerHTML=`${"Yes! your text is camel case"}`;
    }else{
        ans.innerHTML=`${"No! your text is not camel case"}`;
    }
    
}

let clear=document.getElementById("btnclr");
let inputs= document.getElementById("search");

clear.addEventListener('click',()=>{
    inputs.forEach(input=>input.value="");
});


