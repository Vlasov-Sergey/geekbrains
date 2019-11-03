const products = [
  {id: 1, title: 'Notebook', price: 20000, img:'notebook_air.jpg'},
  {id: 2, title: 'Mouse', price: 1500, img:'no_pic.png'},
  {id: 3, title: 'Keyboard', price: 5000, img:'no_img.png'},
  {id: 4, title: 'Gamepad', price: 4500},
  {id: 5, img:'notebook_air.jpg'},
];

const renderProduct = (title='Other', price='0', img='no_pic.png') => `<div class="product-item">
            <h3>${title}</h3>
            <p>${price}</p>
			<img src="./img/${img}" height="100">
          </div>`;
;

const renderProducts = goodsList => {
  document.querySelector('.products').innerHTML = goodsList.map(good => renderProduct(good.title, good.price, good.img));
};

renderProducts(products);
