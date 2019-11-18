const app = new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: 'https://google.com',
    completeElement: `<span>i'm new element <a href="#">Google</a></span>`,
    name: '',
    someNumber: 0,
    counter: 0,
    secondCounter: 0,
    x: 0,
    y: 0,
    color: '#ccc',
    width: 100,
    isRed: false,
    show: true,
    products: [
      {img: 'https://placehold.it/200x150', title: 'Notebook', price: 1000, quantity: 1},
      {img: 'https://placehold.it/200x150', title: 'Mouse', price: 100, quantity: 1},
      {img: 'https://placehold.it/200x150', title: 'Chair', price: 300, quantity: 1},
    ],
  },
  methods: {
    sayHello() {
      // console.log('sayHello');
      setTimeout(() => this.title = 'Changed', 3000);
      return this.title;
    },
    increase(step, event) {
      // console.log(event);
      this.counter += step;
    },
    getCoordinates(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    result() {
      console.log('Method');
      return this.counter > 5 ? 'Grater than 5' : 'Less than 5';
    },
    addProduct() {
      this.products.push(
        {img: 'https://placehold.it/200x150', title: 'Chair', price: 300, quantity: 1}
      );
    }
  },
  computed: {
    output() {
      console.log('Computed');
      return this.counter > 5 ? 'Grater than 5' : 'Less than 5';
    },
    myStyle() {
      return {
        backgroundColor: this.color,
        width: `${this.width}px`,
        height: `${this.width}px`,
      };
    }
  },
  beforeCreate() {
  },
  mounted() {
  },
  created() {
  },
  beforeUpdate() {
    // console.log('before');
  },
  updated() {
    // console.log('updated');
  }
});
