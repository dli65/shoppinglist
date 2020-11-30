Shopping List README - a React App for shopping for Shoes

In this project, in addition to the App.js class, I created a Products.js class, a Filter.js class, and a Cart.js class as my components. My CSS is written in index.css.

The App.js class serves as the main class in my project, initializing the other component classes. 
State:  In App.js, it keeps track in its State of Products: an array of products to be displayed, cartItems: the products in the cart, Sort: the value that the products are sorted by, Size: the size that the products are filtered out by, and Line: the line of shoe that the products are filtered out by.
Functions:  There are 6 functions in App.js that work to change and set the State. 
1. sortProducts. SortProducts sets the sort value in State to whatever is selected in the Sort By selector. It then updates the state of products by sorting the items in products according to the value of state.sort.
2. filterSizeProducts. FilterSizeProducts sets the state.size value to that of the Filter by Size selector. It then calls the function filterProducts.
3. filterLineProducts. FilterLineProducts sets the state.line value to that of the Filter by Line selector. It then calls the function filterProducts.
4. filterProducts. FilterProducts sets the state.sort value to Most Popular, before setting state.products to the list of products that has been filtered by state.size and state.line.
5. addToCart. AddToCart sets the state.cartItems value by adding to it the product whose Add to Cart button has been clicked. cartItems is an array of {product, count} where count is an integer representing the quantity of one specific product in cartItems. If a product is already in the cart, then the count is incremented. Else, a new product is added to the cartItems, with a count starting at 1.
6. removeFromCart. RemoveFromCart sets the state.cartItems value by removing all the items from a product from cartItems.
    

I use the Products.js class to create a div of product cards, each representing a product that can be purchased, or added to the cart. Each product card has the product image and title, available sizes, price, and an Add to Cart button. Products.js takes in as props state.products and the addToCart function. Products.js uses state.products by making a product card for each product in state.products, and uses the addToCart function by setting the 'Add To Cart' button's onClick function to addToCart.


The Filter.js class creates a div containing the text stating total number of products visible, a Sort By selection that offers the option to sort by popularity, price(low to high), and price (high to low). Changing the filters will change the product cards shown and/or the order they are shown in. Filter.js takes in as parameters state.line, state.sort, state.size, filterSizeProducts, filterLineProducts, and sortProducts. It then creates 3 <select> element, one for sorting, one for filtering by size, and one for filtering by the line of shoe. For the each <select> element, the value is set to the matching state prop, and the onClick value is set to the corresponding function. For example, for the Filter By Size <select> element, value is state.size, and onClick is filterSizeProducts. The same is done for the other two.


The Cart.js class creates the cart div on the sidebar, containing a counter of the items in cart, item cards for each item in the cart, and a total aggregator. Each item card has a product image, title, quantity, price, and Remove from cart option. The props that Cart.js takes is state.cartItems, and the removeFromCart function. For each item in state.cartItems, Cart.js creates an item Card. Each itemCard contains the product image, title, price, quantity, and a Remove Button. The Remove button's OnClick function is removeFromCart, so when it is clicked, the itemCard is removed. The Cart.js class also has a total price aggregator at the bottom.

There is also a data.json file, which contains an array of the shoes I used as my products. 

I also used Material UI in my project, looking specifically at the buttons, cards, and typography elements.


