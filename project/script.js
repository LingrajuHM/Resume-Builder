function addnewWEField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("palceholder","enter here");
    
let weOb=document.getElementById("we");
let weAddButtonOb=document.getElementById("weAddButton");

weOb.insertBefore(newNode,weAddButtonOb);
}

function addnewaqField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute('palceholder',"enter here");
    
let aqOb=document.getElementById("aq");
let aqAddButtonOb=document.getElementById("aqAddButton");

aqOb.insertBefore(newNode,aqAddButtonOb);
}
function generateResume(){
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;
    document.getElementById("nameT2").innerHTML=nameField;
    
    document.getElementById("contactT").innerHTML=document.getElementById("phoneField").value;
    document.getElementById("addressT").innerHTML= document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
    document.getElementById("skillT").innerHTML=document.getElementById("skillField").value;

    let wes=document.getElementsByClassName('weField');
    let str ='';
    for (let e of wes){
        str+= `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    let aqs=document.getElementsByClassName("eqField");
    let str1="";
    for (let e of aqs){
        str1+=`<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    let file=document.getElementById("imgField").files[0];
    console.log('file');

    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend=function()
    {
        document.getElementById("imgTemplate").src=reader.result;
    };


    document.getElementById("Resume-form").style.display='none';
    document.getElementById("Resume-template").style.display='block';
}
function printResume(){
    window.print();

}

