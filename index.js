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
}); 


















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