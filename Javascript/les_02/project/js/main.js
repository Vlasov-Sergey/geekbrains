class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this._sum();
    this._render();
  }

  _sum() {
    this.totalPrice = 0;
    for (let product of this.goods) {
      this.totalPrice += product.price;
    }
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 40000},
      {id: 2, title: 'Mouse', price: 1000},
      {id: 3, title: 'Keyboard', price: 2500},
      {id: 4, title: 'Gamepad', price: 1500},
    ];
  }

  _render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }

    block.insertAdjacentHTML('beforeend', `Total: ${this.totalPrice}`);
  }
}

const list = new ProductList();


class Cart {
  constructor(userId = 1) {
    this.userId = userId;
    this.products = [];
    this._fetchProducts();
    this._render();
  }

  _render() {
    
  }

  addProduct() {

  }

  deleteProduct() {

  }

  // edit = delete + add :)

}

class CartItem {
  constructor(cartId = 1, product_id, count, color) {
    this.cartId = cartId;
    this.itemId = itemId;
    this.product_id = product_id;
    this.count = count;
    this.color = color; // some characteristic (color, size or equipment)
    this._render();
  }

  _render() {
    
  }


}