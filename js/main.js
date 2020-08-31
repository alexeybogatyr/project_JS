const products = [{
    id: 1,
    title: 'Notebook',
    price: 20000,
    img: 'https://github.com/alexeybogatyr/static/blob/master/img/js_shop/mango_1.png?raw=true'
  },
  {
    id: 2,
    title: 'Mouse',
    price: 1500,
    img: 'https://github.com/alexeybogatyr/static/blob/master/img/js_shop/mango_2.png?raw=true'
  },
  {
    id: 3,
    title: 'Keyboard',
    price: 5000,
    img: 'https://github.com/alexeybogatyr/static/blob/master/img/js_shop/mango_3.png?raw=true'
  },
  {
    id: 4,
    title: 'Gamepad',
    price: 4500,
    img: 'https://github.com/alexeybogatyr/static/blob/master/img/js_shop/mango_4.png?raw=true'
  },
];

const renderProduct = (title, price, id, img) => {
  return `<div class="product-item" id="${id}">
            <img class="product-img" src = "${img}">
            <div class="product_contant">
            <h3>${title}</h3>
            <p>${price} &#8381</p>
            </div>
            <div class="product_button">
            <button class="by-btn">Добавить в корзину</button>
            </div>
          </div>`;
};

// const renderProducts = (list) => {
//   const productList = list.map((product) => {
//     return renderProduct(product.title, product.price);
//   });
//   console.log(productList.join(''));
//   document.querySelector('.products').innerHTML = productList.join('');
// }

const renderProducts = () => {
  products.forEach(item => {
    document.querySelector('.products').innerHTML += renderProduct(item.title, item.price, item.id, item.img);
  })
}


renderProducts(products);