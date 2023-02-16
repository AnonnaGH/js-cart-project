document.getElementById("first-card").addEventListener('click',function(){
//get the data from html using id
const productName = document.getElementById("first-name").innerText;
const productPrice = document.getElementById("first-price").innerText;
const ProductQuantity = document.getElementById("first-quantity").innerText;

// console.log(productName,productPrice,ProductQuantity);


const priceTotal = parseInt(productPrice) * parseInt(ProductQuantity);

const container = document.getElementById("table-container");
const tr = document.createElement("tr");  

tr.innerHTML = `
<td>${1}</td>
<td>${productName}</td>
<td>${productPrice}</td>
<td>${ProductQuantity}</td>
<td>${priceTotal}</td>

`;

container.appendChild(tr);

}); 