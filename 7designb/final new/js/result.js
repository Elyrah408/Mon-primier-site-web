

let myColorList =[];
let colorButton = document.getElementById("colorButton");
let colorPicker = document.getElementById("colorPicker");


// let storedBlogs = JSON.parse(localStorage.getItem('homeColorSelection'));
// storedBlogs.forEach(myvalueinput => {
//   myColorList.push(myvalueinput);

// const newDiv = document.createElement("div");
// newDiv.id = `dynamicDiv-${Math.floor(Math.random() * 1000)}`;
// newDiv.className="rgbdiv";
// newDiv.style.backgroundColor=myvalueinput;
// newDiv.textContent=myvalueinput;


// document.getElementById("botomid").appendChild(newDiv);


// newDiv.addEventListener("click", function() {
//   let inVersArr=[];



//   if(/^#?[A-Fa-f0-p]{6}$/.test(myvalueinput)){
        
//     myvalueinput = myvalueinput.split("#")[1] || myvalueinput;
//     for(let i= 0; i<myvalueinput.length; i+=2){

//       inVersArr.push(parseInt(myvalueinput[i] + myvalueinput[i+1], 16));


   
// }
// }



// let valuearr=[0.367322,0.860646,-.227968,0.280085,0.672501,0.047413,-0.01182,0.04294,0.968881,
// 1.255528,-0.076749,-0.178779,-0.078411,0.930809,0.147602,0.004733,0.691367,0.3039,
// 0.152286, 1.052583, -.204868, 0.114503, 0.786281, 0.099216,-.003882, -.048116, 1.051998
// ];


// let  finDeuValR =  (inVersArr[0])* (valuearr[0]) + (inVersArr[1])*(valuearr[1])+ (inVersArr[2])*(valuearr[2]);
// let   finDeuValG =  (inVersArr[0])* (valuearr[3]) + (inVersArr[1])*(valuearr[4])+ (inVersArr[2])*(valuearr[5]);
// let   finDeuValB =  (inVersArr[0])* (valuearr[6])+ (inVersArr[1])*(valuearr[7])+ (inVersArr[2])*(valuearr[8]);

// let   fintetValR =  inVersArr[0]* valuearr[9]     + inVersArr[1]*valuearr[10]+ inVersArr[2]*valuearr[11];
// let  fintetValG =  inVersArr[0]* valuearr[12]    + inVersArr[1]*valuearr[13]+inVersArr[2]*valuearr[14];
// let  fintetValB =  inVersArr[0]* valuearr[15]    + inVersArr[1]*valuearr[16]+inVersArr[2]*valuearr[17];

// let fiproValR =  inVersArr[0]* valuearr[18] + inVersArr[1]*valuearr[19]+ inVersArr[2]*valuearr[20];
// let fiproValG =  inVersArr[0]* valuearr[21] + inVersArr[1]*valuearr[22]+inVersArr[2]*valuearr[23];
// let fiproValB =  inVersArr[0]* valuearr[24] + inVersArr[1]*valuearr[25]+inVersArr[2]*valuearr[26];

//  let newarray=[];
//  let changevalue=[finDeuValR,finDeuValG,finDeuValB,fintetValR,fintetValG,fintetValB,fiproValR,fiproValG,fiproValB];
//  for(let x=0;  x<9; x++){
//   if(changevalue[x]>255){
//     changevalue[x]=255

//     newarray.push(changevalue[x]);
//   }
//   else{
//    newarray.push(changevalue[x]);
//   }
 
       
//  }


// let rgbvalue =inVersArr[0]+","+inVersArr[1]+","+inVersArr[2];
// let rdh = Math.abs(Math.round(newarray[0]))+","+Math.abs(Math.round(newarray[1]))+","+Math.abs(Math.round(newarray[2]));
// let rth = Math.abs(Math.round(newarray[3]))+","+Math.abs(Math.round(newarray[4]))+","+Math.abs(Math.round(newarray[5]));
// let rph = Math.abs(Math.round(newarray[6]))+","+Math.abs(Math.round(newarray[7]))+","+Math.abs(Math.round(newarray[8]));

// let colordue = document.getElementById("dueh2");
// let colortit = document.getElementById("tit2");
// let colorpro = document.getElementById("pro2");



// colordue.innerText= rdh;
// colordue.style.backgroundColor="RGB("+rdh+")";


// colortit.innerText=rth;
// colortit.style.backgroundColor="RGB("+rth+")";

// colorpro.innerText=rph;

// colorpro.style.backgroundColor="RGB("+rph+")";


// colorButton.style.backgroundColor="RGB("+rgbvalue+")";





// });



  
// });

  let btn_add= document.getElementById("add");
  btn_add.onclick=createNewDiv;
 



colorButton.addEventListener('click', () => {
  colorPicker.click();
});

let colopicker = document.getElementById("colorPicker").addEventListener("input",(event)=>{

  let hexCode= colorPicker.value;

  let rgbArr=[];

    

      if(/^#?[A-Fa-f0-p]{6}$/.test(hexCode)){
                  
                   hexCode = hexCode.split("#")[1] || hexCode;
                   for(let i= 0; i<hexCode.length; i+=2){
          
                  rgbArr.push(parseInt(hexCode[i] + hexCode[i+1], 16));
          
          
                  
               }
              }
           
              
              let valuearr=[0.367322,0.860646,-.227968,0.280085,0.672501,0.047413,-0.01182,0.04294,0.968881,
              1.255528,-0.076749,-0.178779,-0.078411,0.930809,0.147602,0.004733,0.691367,0.3039,
              0.152286, 1.052583, -.204868, 0.114503, 0.786281, 0.099216,-.003882, -.048116, 1.051998
             ];


            let  finDeuValR =  (rgbArr[0])* (valuearr[0]) + (rgbArr[1])*(valuearr[1])+ (rgbArr[2])*(valuearr[2]);
            let   finDeuValG =  (rgbArr[0])* (valuearr[3]) + (rgbArr[1])*(valuearr[4])+ (rgbArr[2])*(valuearr[5]);
            let   finDeuValB =  (rgbArr[0])* (valuearr[6])+ (rgbArr[1])*(valuearr[7])+ (rgbArr[2])*(valuearr[8]);
        
            let   fintetValR =  rgbArr[0]* valuearr[9]     + rgbArr[1]*valuearr[10]+ rgbArr[2]*valuearr[11];
            let  fintetValG =  rgbArr[0]* valuearr[12]    + rgbArr[1]*valuearr[13]+rgbArr[2]*valuearr[14];
            let  fintetValB =  rgbArr[0]* valuearr[15]    + rgbArr[1]*valuearr[16]+rgbArr[2]*valuearr[17];
        
            let fiproValR =  rgbArr[0]* valuearr[18] + rgbArr[1]*valuearr[19]+ rgbArr[2]*valuearr[20];
            let fiproValG =  rgbArr[0]* valuearr[21] + rgbArr[1]*valuearr[22]+rgbArr[2]*valuearr[23];
            let fiproValB =  rgbArr[0]* valuearr[24] + rgbArr[1]*valuearr[25]+rgbArr[2]*valuearr[26];
               
                let newarray=[];
                let changevalue=[finDeuValR,finDeuValG,finDeuValB,fintetValR,fintetValG,fintetValB,fiproValR,fiproValG,fiproValB];
                for(let x=0;  x<9; x++){
                 if(changevalue[x]>255){
                   changevalue[x]=255
        
                   newarray.push(changevalue[x]);
                 }
                 else{
                  newarray.push(changevalue[x]);
                 }
                
                      
                }
             

             let rgbvalue =rgbArr[0]+","+rgbArr[1]+","+rgbArr[2];
             let rdh = Math.abs(Math.round(newarray[0]))+","+Math.abs(Math.round(newarray[1]))+","+Math.abs(Math.round(newarray[2]));
             let rth = Math.abs(Math.round(newarray[3]))+","+Math.abs(Math.round(newarray[4]))+","+Math.abs(Math.round(newarray[5]));
             let rph = Math.abs(Math.round(newarray[6]))+","+Math.abs(Math.round(newarray[7]))+","+Math.abs(Math.round(newarray[8]));

            let colordue = document.getElementById("dueh2");
            let colortit = document.getElementById("tit2");
            let colorpro = document.getElementById("pro2");
           
           

             colordue.innerText= "RGB"+rgbArr +" "+"H"+colorPicker.value+""+rdh;
             navigator.clipboard.writeText(colordue.value);
             colordue.style.backgroundColor="RGB("+rdh+")";


             colortit.innerText= "RGB"+rgbArr +" "+"H"+colorPicker.value+""+rth;
             navigator.clipboard.writeText(colortit.value);
             colortit.style.backgroundColor="RGB("+rth+")";

             colorpro.innerText= "RGB"+rgbArr +" "+"H"+colorPicker.value+""+rph;
             navigator.clipboard.writeText(colorpro.value);
             colorpro.style.backgroundColor="RGB("+rph+")";

             colorButton.style.backgroundColor="RGB("+rgbvalue+")";

          
      });
  



/// sending array to print file and print the value
    let print_btn = document.getElementById("print_id");
    print_btn.addEventListener("click",()=>{

      
      localStorage.setItem("forPrintData", JSON.stringify(myColorList));

      window.location.href="print.html";
    });

    
  ////creating DIV dynamic


  function createNewDiv(){

    let myvalueinput =document.querySelector("input").value;
    // let myColorList2 = JSON(localStorage.getItem("homeColorSelection"));
    
    

      if (myColorList.length<20) {
         for(x=0; x<1; x++){

       myColorList.push(myvalueinput);
      //  alert(storedBlogs)


const newDiv = document.createElement("div");
newDiv.id = `dynamicDiv-${Math.floor(Math.random() * 1000)}`;
newDiv.className="rgbdiv";
newDiv.style.backgroundColor=myvalueinput;
newDiv.textContent=myvalueinput;


document.getElementById("botomid").appendChild(newDiv);




newDiv.addEventListener("click", function() {
            let inVersArr=[];



            if(/^#?[A-Fa-f0-p]{6}$/.test(myvalueinput)){
                  
              myvalueinput = myvalueinput.split("#")[1] || myvalueinput;
              for(let i= 0; i<myvalueinput.length; i+=2){
     
                inVersArr.push(parseInt(myvalueinput[i] + myvalueinput[i+1], 16));
     
     
             
          }
         }

        
         
                      let valuearr=[0.367322,0.860646,-.227968,0.280085,0.672501,0.047413,-0.01182,0.04294,0.968881,
         1.255528,-0.076749,-0.178779,-0.078411,0.930809,0.147602,0.004733,0.691367,0.3039,
         0.152286, 1.052583, -.204868, 0.114503, 0.786281, 0.099216,-.003882, -.048116, 1.051998
        ];


       let  finDeuValR =  (inVersArr[0])* (valuearr[0]) + (inVersArr[1])*(valuearr[1])+ (inVersArr[2])*(valuearr[2]);
       let   finDeuValG =  (inVersArr[0])* (valuearr[3]) + (inVersArr[1])*(valuearr[4])+ (inVersArr[2])*(valuearr[5]);
       let   finDeuValB =  (inVersArr[0])* (valuearr[6])+ (inVersArr[1])*(valuearr[7])+ (inVersArr[2])*(valuearr[8]);
   
       let   fintetValR =  inVersArr[0]* valuearr[9]     + inVersArr[1]*valuearr[10]+ inVersArr[2]*valuearr[11];
       let  fintetValG =  inVersArr[0]* valuearr[12]    + inVersArr[1]*valuearr[13]+inVersArr[2]*valuearr[14];
       let  fintetValB =  inVersArr[0]* valuearr[15]    + inVersArr[1]*valuearr[16]+inVersArr[2]*valuearr[17];
   
       let fiproValR =  inVersArr[0]* valuearr[18] + inVersArr[1]*valuearr[19]+ inVersArr[2]*valuearr[20];
       let fiproValG =  inVersArr[0]* valuearr[21] + inVersArr[1]*valuearr[22]+inVersArr[2]*valuearr[23];
       let fiproValB =  inVersArr[0]* valuearr[24] + inVersArr[1]*valuearr[25]+inVersArr[2]*valuearr[26];
          
           let newarray=[];
           let changevalue=[finDeuValR,finDeuValG,finDeuValB,fintetValR,fintetValG,fintetValB,fiproValR,fiproValG,fiproValB];
           for(let x=0;  x<9; x++){
            if(changevalue[x]>255){
              changevalue[x]=255
   
              newarray.push(changevalue[x]);
            }
            else{
             newarray.push(changevalue[x]);
            }
           
                 
           }
        

        let rgbvalue =inVersArr[0]+","+inVersArr[1]+","+inVersArr[2];
        let rdh = Math.abs(Math.round(newarray[0]))+","+Math.abs(Math.round(newarray[1]))+","+Math.abs(Math.round(newarray[2]));
        let rth = Math.abs(Math.round(newarray[3]))+","+Math.abs(Math.round(newarray[4]))+","+Math.abs(Math.round(newarray[5]));
        let rph = Math.abs(Math.round(newarray[6]))+","+Math.abs(Math.round(newarray[7]))+","+Math.abs(Math.round(newarray[8]));

       let colordue = document.getElementById("dueh2");
       let colortit = document.getElementById("tit2");
       let colorpro = document.getElementById("pro2");
      
      

        colordue.innerText= rdh;
        colordue.style.backgroundColor="RGB("+rdh+")";


        colortit.innerText=rth;
        colortit.style.backgroundColor="RGB("+rth+")";

        colorpro.innerText=rph;
       
        colorpro.style.backgroundColor="RGB("+rph+")";


        colorButton.style.backgroundColor="RGB("+rgbvalue+")";


     
 });
           
        

}

}
else{
alert("box is full");

alert(myColorList);
}

}


 document.getElementById("reset").addEventListener("click",()=>{

  location.reload();
  window. location. href ="index.html";
 })

