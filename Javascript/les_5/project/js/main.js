const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    userSearch: '',
    showCart: false, // показать корзину (true/false)
    cartUrl: '/getBasket.json',
    catalogUrl: '/catalogData.json',
    products: [], // все товары
    cartItems: [], // товары в корзине
    filtered: [], // отображаемые товары (после поиска)
    imgCatalog: 'https://placehold.it/200x150',
    imgCart: 'https://placehold.it/50x100',
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product) {
      this.getJson(`${API}/addToBasket.json`)
        .then(data => {
          if (data.result === 1) { 
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) { // если такой есть в корзине, то увеличить количество
              find.quantity++;
            } else { // если такого нет в корзине, то добавить в массив cartItems
              let prod = Object.assign({quantity: 1}, product);
              this.cartItems.push(prod)
            }
          } else {
            alert('Error');
          }
        })
    },
    remove(item) {
      this.getJson(`${API}/deleteFromBasket.json`)
        .then(data => {
          if (data.result === 1) {
            if (item.quantity > 1) { // если в корзине больше 1 шт, то уменьшить количество
              item.quantity--;
            } else { // если в корзине меньше или равно 1 шт, то удалить из массива cartItems
              this.cartItems.splice(this.cartItems.indexOf(item), 1)
            }
          }
        })
    },
    filter() {
      let regexp = new RegExp(this.userSearch, 'i'); // поиск по регулярке в поле поиска
      this.filtered = this.products.filter(el => regexp.test(el.product_name)); // из массива всех товаров выбираются подходящии и заносятся в массив filtered
    },
  },
  created(){

  },
  beforeDestroy() {

  },
  beforeUpdate() {

  },
  mounted() { // когда приложение смонтированно (инициализированно в блок с id app)
    this.getJson(`${API + this.cartUrl}`)
      .then(data => { // запрос за корзиной на сервер
        for (let el of data.contents) { // добавление всех элементов в массивы cartItems и filtered
          this.cartItems.push(el); 
          this.filtered.push(el);
        }
      });
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => { // запрос к каталогу (все товары)
        for (let el of data) {
          this.products.push(el); // добавление полученных элементов в массив products
        }
      });
  }
});

