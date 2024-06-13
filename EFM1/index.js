
document.getElementById('Sbmit').addEventListener("click",function(e){
    e.preventDefault();
    let nom=document.getElementById('NOM').value;
    let prenom=document.getElementById("PRENOM").value;
    let pwd=document.getElementById("PWD").value;
    let numero=document.getElementById("NUMERO").value;
    let code=document.getElementById("CODE").value;


    if(nom === ""){
        document.getElementById('NOM').classList.add("error");
        document.querySelector(".login1").innerText="nom entre 3 et 8 caractere"; 
        document.querySelector('.login1').classList.remove("login1");  
    }
    else if (nom.length<3 || nom.length>8){
        document.getElementById("NOM").classList.add("error");
        document.querySelector(".login1").innerText="nom entre 3 et 8 caractere";
        document.querySelector('.login1').login2.remove("login1")
    }
    else{
        document.getElementById("NOM").classList.remove("error");
        document.getElementById("span").classList.add("login1");

    }
    if(prenom === ""){
        document.getElementById("PRENOM").classList.add("error");
        document.querySelector(".login2").innerText="prenom Contain 10 nmbre";
        document.querySelector(".login2").classList.remove("login2");
    }
    else{
        document.getElementById("PRENOM").classList.remove("error");
        document.getElementById("login2").classList.add("login2");
    }

    if(pwd === ""){
        document.getElementById("PWD").classList.add("error");
        document.querySelector(".login3").innerText="pwd contain 3 caractere";
        document.querySelector(".login3").classList.remove("login3")


    }
    else{
        document.getElementById("PWD").classList.remove("error");
        document.getElementById("login3").classList.add("login3");
    }
    if(numero == ""){
        document.getElementById("NUMERO").classList.add("error");
        document.querySelector(".login4").innerText="numero contain 10 nombre";
        document.querySelector(".login4").classList.remove('login4');
    }
    else{
        document.getElementById("NUMERO").classList.remove("error");
        document.getElementById("login4").classList.add("login4");
    }
    if(code === ""){
        document.getElementById("CODE").classList.add("error");
        document.querySelector(".login5").innerText="code contain 4 caractere";
        document.querySelector(".login5").classList.remove("login5");


    }
    else{
        document.getElementById("CODE").classList.remove("error");
        document.getElementById("login5").classList.add("login5");
    }
    let achats=[];
    let achat = new achat(nom,prenom,pwd,numero,code);
    achats.push(achat);
    console.log(achats)

    
    


   
  






})
document.getElementById('reset').addEventListener('click',function(e){
    e.preventDefault();
    let nom=document.getElementById('NOM').value="";
    let prenom=document.getElementById("PRENOM").value="";
    let pwd=document.getElementById("PWD").value="";
    let numero=document.getElementById("NUMERO").value="";
    let code=document.getElementById("CODE").value="";

})