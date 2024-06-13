let achats=[];
document.getElementById("Sbmit").addEventListener('click',function(e){
    e.preventDefault()
    
    let achat = {cin:"",name:"",lastname:"",branch:"",module:"",grande:""}
   
    let cin=document.getElementById("CIN").value;
    let name=document.getElementById("NAME").value;
    let lastname=document.getElementById("Last name").value;
    let branch=document.getElementById("Branch").value;
    let module=document.getElementById("Module").value;
    let grande=document.getElementById("grande").value;


     achat.cin=cin;
     achat.name=name;
     achat.lastname=lastname;
     achat.branch=branch;
     achat.module=module;
     achat.grande=grande;

    achats.push(achat);
    console.log(achats)


})


 document.getElementById('affichier').addEventListener("click", function (e) {
    e.preventDefault();
    let content = "";
  for (let i = 0; i< achats.length; i++) {
        content += `<tr>
                      <th cope="row">${achats[i].cin}</th>
                      <td >${achats[i].name}</td>
                      <td >${achats[i].lastname}</td>
                      <td >${achats[i].branch}</td>
                      <td>${achats[i].module}</td>
                      <td>${achats[i].grande}</td>

                   </tr>`
     }
     document.getElementById('tdata').innerHTML = content;
 })


document.getElementById('reset').addEventListener('click',function(e){
    e.preventDefault();
    let cin=document.getElementById("CIN").value='';
    let name=document.getElementById("NAME").value='';
    let lastname=document.getElementById("Last name").value='';
    let branch=document.getElementById("Branch").value='';
    let module=document.getElementById("Module").value='';
    let grande=document.getElementById("grande").value='';

})
document.getElementById('delete').addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('tdata').ramove();


})


