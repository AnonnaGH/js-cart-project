// serial No

let serial = 0;



// -------------First card--------------------------------------------------
document.getElementById("first-card").addEventListener('click',function(){
     
    serial +=1;
    //get the data from html using id
const productName = document.getElementById("first-name").innerText;
const productPrice = document.getElementById("first-price").innerText;
const productQuantity = document.getElementById("first-quantity").innerText;

// console.log(productName,productPrice,productQuantity);


const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

// show data
displayData(productName,productPrice,productQuantity,priceTotal);

disabledButton("first-card");

}); 


//---------------- Second  card--------------------------------------------------
// Event object
//using event obct from browser

document.getElementById("second-card").addEventListener("click",function(e){
    // console.log(e.target);
    serial +=1;
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;


    const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    

    const sumTotal = parseInt(pPrice) +  parseInt(pQuantity);
    

    displayData(pName,pPrice,pQuantity,sumTotal);

    disabledButton("second-card");

    
})


//----------------third card--------------------------------------------------

document.getElementById("third-card").addEventListener('click',function(){
     
    serial +=1;
    //get the data from html using id
const productName = document.getElementById("third-name").innerText;
const productPrice = document.getElementById("third-price").innerText;
const productQuantity = document.getElementById("third-quantity").innerText;

// console.log(productName,productPrice,productQuantity);


const priceTotal = parseInt(productPrice) - parseInt(productQuantity);

// show data
displayData(productName,productPrice,productQuantity,priceTotal);

disabledButton("third-card");
}); 



// common funtion to display data

// function getAllData(){
    


// }











//----------------5th card--------------------------------------------------

document.getElementById("last-card").addEventListener("click",function(){
    serial +=1;
    const productName = document.getElementById("last-name").innerText;

    const productPrice =  document.getElementById("first-input").value;
    const productQuantity = document.getElementById("second-input").value;

    if(productPrice == "" || productQuantity == "" || productPrice <= 0 || productQuantity <= 0 || typeof productPrice === "string" || productQuantity === "string") {
        return alert("please enter any valid number");
      }
    
    //   typeof value === "string"

    const total = parseInt(productPrice)/parseInt(productQuantity);

    displayData(productName,productPrice,productQuantity,total);

    disabledButton("last-card");

})











///common function
function disabledButton(id){
    document.getElementById(id).setAttribute("disabled",true);
}




//common function to display data--------------------------------------
function displayData(productName,productPrice,productQuantity,priceTotal) {
    const container = document.getElementById("table-container");
const tr = document.createElement("tr");  
 
tr.innerHTML = `
<td>${serial}</td>
<td>${productName}</td>
<td>${productPrice}</td>
<td>${productQuantity}</td>
<td>${priceTotal}</td>

`;

container.appendChild(tr);

}