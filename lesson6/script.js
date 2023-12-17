const dataProducts = JSON.parse(dataInfo);
console.log(dataProducts);
let productTemplate = document.querySelector(
  '#productTemplate .product__items'
);
console.log(productTemplate);
let product = document.querySelector('.product');
console.log(product);

dataProducts.forEach((element) => {
  let productClone = productTemplate.cloneNode(true);
  console.log(productClone);
  productClone.querySelector('.product__img').src = element.image;
  productClone.querySelector('.product__button img').src = element.btn;
  productClone.querySelector('.product__header').textContent = element.header;
  productClone.querySelector('.product__dsc').textContent = element.dsc;
  productClone.querySelector('.product__price').textContent = element.price;
  product.appendChild(productClone);
});
