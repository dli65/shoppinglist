import './App.css';
import './index.css';
import React from "react";
import {Typography} from '@material-ui/core/';
import data from "./data.json";
import Products from "./Products.js";
import Filter from './Filter';
import Cart from './Cart.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //products tracks the product cards that show up on the screen
      products: data.products,
      //size tracks the show size selected in the size filter
      size:"",
      //sort tracks the factor that the products are sorted by: popularity(id), low to high price, and high to low price
      sort: "",
      //line tracks the line of shoe (AF1, Air Max, Air Jordan, All)
      line:"",
      //cartitems track the items in the cart
      cartItems:[],
    };
  }

  //removeFromCart removes a product from the cart by cloning cartItems from state, filtering out the product, and setting the state cartitems
  removeFromCart = (product) => {
    const cartItemsC = this.state.cartItems.slice();
    this.setState({cartItems:cartItemsC.filter(item => item.id != product.id)})
  }

  //addToCart adds an item to the cart by either creating a new item in the side bar, or incrementing an already existing item's count
  addToCart = (product) => {
    const cartItemsC = this.state.cartItems.slice();
    let alrInCart = false;
    cartItemsC.forEach(item => {
      if (item.id === product.id){
        item.count++;
        alrInCart = true;
      }
    });
    if (!alrInCart) {
      cartItemsC.push({...product, count : 1});
    }
    this.setState({cartItems : cartItemsC})
  }

  //sortProducts sorts the products displayed by either lowest price, highest price, or popularity(id)
  sortProducts = (event) =>{
    const sortS = event.target.value;
    console.log(event.target.value);
    this.setState(state => ({
      sort: sortS,
      products: this.state.products.slice().sort((a,b) => (
        sortS === "Lowest"?
        ((a.price > b.price)? 1:-1):
        sortS === "Highest"?
        ((a.price < b.price)? 1:-1):
        ((a.id > b.id)? 1:-1)
      ))
    }))
  }

  //filterSizeProducts updates the size state value, and then calls on filterProducts to filter by state.size
  filterSizeProducts = (event) => {
    this.setState({
      size: event.target.value
    },
    this.filterProducts)

  }

  //filterLineProducts updates the line state value, and then calls on filterProducts to filter by state.line
  filterLineProducts = (event) => {
    this.setState({
      line: event.target.value
    }, this.filterProducts)
  }

  //filterProducts sets the state of products by filtering by both the size and the line from state
  filterProducts = () => {
    this.setState({
      sort:"",
      products: data.products.filter(product => product.title.indexOf(this.state.line)>=0 && product.availableSizes.indexOf(this.state.size)>=0)
    })
  }

  render() {
  return (

    <div className="grid-cont">
      <header>
        <Typography variant="h5">Chunky White Shoes</Typography>
      </header>
      {/* holds the main content: product list and sidebar */}
      <main>
        <div className = "content">
          <div className = "main">
            {/* Filter returns the sort by and two filter by select options. Takes in state.line,size,and sort as props,
            as well as the three filter/sort functions */}
            <Filter count = {this.state.products.length}
            size = {this.state.size}
            sort = {this.state.sort}
            line = {this.state.line}
            filterSizeProducts={this.filterSizeProducts}
            filterLineProducts={this.filterLineProducts}
            sortProducts = {this.sortProducts}>
            </Filter>

            {/* Products returns a div containing all the product cards. Takes the state.products and addToCart function as props. */}
            <Products products = {this.state.products}
            addToCart = {this.addToCart}></Products>
          </div>
            {/* Cart gives back the div on the sidebar holding the cart items, counter, and total price aggregator */}
          <div className = "cart-sidebar">
            <Cart cartItems={this.state.cartItems} removeFromCart = {this.removeFromCart}></Cart>
          </div>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  );
  }
}


