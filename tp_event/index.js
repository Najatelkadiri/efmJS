// //__________________video 52____ css__________________-
// // let contain =document.querySelector("#container");
// // contain.innerText ='heeloi world'; //ghadi yzeed lina wahed 


// //element.style.property=value

// contain.style.backgroundColor='red';
// contain.style.color='white'; 
// container.style.padding='40px';
// container.style.fontSize='40px';


// //kfch nmsh chi proprty
// contain.style.removeProperty('color')//ghada tmsah lia lproprty li hia color

// //setProperty hta hia bach nzidou chi proprtey
// contain.style.setProperty('color','yellow')
// //element.style.cssText=
// //contain.style.cssText ='color:blue  ' //tRI9a akhra bach ndirou css




// //______________video 53 _________________
// //createElement :bach nkriyiw element
// //appendChild: bach nzidou
  

// //create element
// let containerr =document.createElement('div');
// let head =document.createElement('h1');
// let imag=document.createElement('img');


// //idafat lmohtawa
// let content =document.createTextNode('helloi najat');
// head.appendChild(content);//zid content f head
// imag.src='img.jpg'

// //idaafat l'elemnt dans la place 
// containerr.appendChild(content);
// containerr.appendChild(img);
// document.body.appendChild(containerr)
// console.log(containerr)



//_____________video 54______________________
let card=document.createElement('div');
document.body.appendChild(card)

function element()
{
let containee=document.createElement('div');
let title=document.createElement('h1');
let age=document.createElement('p');
let img=document.createElement('img');


let heads=document.createTextNode('title');
let  agee=document.createTextNode('age')
img.src='img.jpg';


title.appendChild(heads)
age.appendChild(agee)


containee.appendChild(title);
containee.appendChild(age);
containee.appendChild(img);
card.appendChild(containee)

containee.style.width='160px';
containee.style.height='300px';
containee.style.background='#444';
containee.style.color='#fff'
containee.style.padding='5px'
containee.style.margin='10px'
containee.style.display='inline-block'

img.style.width='100%'
img.style.width='130px'
}
for(let i=0;i<90;i++){
    element()

}





