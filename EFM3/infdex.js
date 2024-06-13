
class stagaire{
    constructor(code,nom,prenom,groupe,note){
        this.code=code
        this.nom=nom
        this.prenom=prenom
        this.groupe=groupe
        this.note=note
    }
}
let conts=[];
document.getElementById("enregister").addEventListener("click",function(e){
    e.preventDefault();
  
    
    let code = document.getElementById('code').value;
    let nom = document.getElementById('nom').value;
    let  prenom  = document.getElementById('prenom').value;
    let groupe =document.getElementById('groupe').value;
    let  note  = document.getElementById('note').value;

    let stagaires=new stagaire(code,nom,prenom,groupe,note)
    conts.push(stagaires);
    console.log(conts)

    let cont =/[DD]-[0-9]{3}-[0-9]{1,2}/
    let contt=cont.test(code)
    console.log(contt)

    if( contt === false){
       document.getElementById("code").classList.add("error");
       document.querySelector(".span").innerText="incorrect";
       document.querySelector(".span").classList.remove("span");


    }
    else{
        
        document.getElementById("code").classList.remove("error");
        document.querySelector(".span").classList.add("span");

    }

    let content="";
    for(let i=0;i<conts.length;i++){
        content+=`<tr>
            <td>${conts[i].code}</td>
            <td>${conts[i].nom}</td> 
            <td>${conts[i].prenom}</td> 
            <td>${conts[i].groupe}</td>
            <td>${conts[i].note}</td> 
        
        <tr/>`

    }
    document.getElementById("tdata").innerHTML=content;


    

  
})









//test() ka traja3 leeek true ou la false



