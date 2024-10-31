

let retrievedArray = JSON.parse(localStorage.getItem("mycolorvalues"));
// alert(retrievedArray[0]);
  document.getElementById("body1").style.backgroundColor= "RGB("+retrievedArray[0]+")";
  document.getElementById("body1").innerHTML=retrievedArray[0];

  document.getElementById("dueh").style.backgroundColor= "RGB("+retrievedArray[1]+")";
  document.getElementById("dueh").innerHTML=retrievedArray[0];

  document.getElementById("tit").style.backgroundColor= "RGB("+retrievedArray[2]+")";
  document.getElementById("tit").innerHTML=retrievedArray[0];
  
  document.getElementById("pro").style.backgroundColor= "RGB("+retrievedArray[3]+")";
  document.getElementById("pro").innerHTML=retrievedArray[3];


  let btn_add= document.getElementById("add");
  btn_add.onclick=createNewDiv;


  function createNewDiv(){


//  l;
//  btn_add.addEventListener("click",()=>{

  let myvalueinput =document.querySelector("#inputnumber");

  for(x=0; x<2; x++){



  const newDiv = document.createElement("div");
  newDiv.textContent="Helo I am trying to find slution for dynamic interface";
  newDiv.id="firstdiv";
  newDiv.className="rgbdiv";
  newDiv.style.height="75vh";
  newDiv.style.background="red"
  newDiv.style.width="50%";
  newDiv.style.float="left"
  newDiv.style.position="sticky"
  newDiv.style.marginBottom="25px";

  const duediv = document.createElement("div")
  duediv.textContent="Helo I am trying to find slution for dynamic interface";
  duediv.id="secondiv";
  duediv.className="dueval";
  duediv.style.height="25vh";
  duediv.style.background="blue"
  duediv.style.width="50%";
  duediv.style.float="right";
  duediv.style.position="sticky"

  const titdiv = document.createElement("div")
  titdiv.textContent="Helo I am trying to find slution for dynamic interface";
  titdiv.id="thdiv";
  titdiv.className="titval";
  titdiv.style.height="25vh";
  titdiv.style.background="black"
  titdiv.style.width="50%";
  titdiv.style.float="right";
  titdiv.style.marginTop="auto";
  titdiv.style.position="sticky"



  const prodiv = document.createElement("div")
  prodiv.textContent="Helo I am trying to find slution for dynamic interface";
  prodiv.id="fordiv";
  prodiv.className="proval";
  prodiv.style.height="25vh";
  prodiv.style.background="green"
  prodiv.style.width="50%";
  prodiv.style.float="right";
  prodiv.style.marginTop="auto";
  prodiv.style.position="sticky"
  prodiv.style.marginBottom="25px";
   


//    const btn_dy =document.createElement("button")
//    btn_dy.id="add";
//    btn_dy.style.textContent="+";
//    btn_dy.style.marginTop="20px";
//    add the text node to the newly created div
 
 // add the newly created element and its content into the DOM


  const currentDiv = document.getElementById("pagecontainer");
  document.body.insertBefore(newDiv, currentDiv);
  const pdiv2 = document.getElementById("firstdiv");
  document.body.insertBefore(duediv,currentDiv);
  const pdiv3 = document.getElementById("secondiv");
  document.body.insertBefore(titdiv,currentDiv);
  const pdiv4 = document.getElementById("thdiv");
  document.body.insertBefore(prodiv,currentDiv);



}

}