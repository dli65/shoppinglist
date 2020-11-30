import React from "react";
import {Grid, Card, CardMedia, Typography, CardActions, CardContent, Button} from '@material-ui/core';
import './index.css';

//Cart returns the div holding the counter of cart items, the item cards in the cart, and the total aggregator.
//It takes the state of cartItems and removeFromCart functions as props
export default class Cart extends React.Component{
    render(){
        const {cartItems} = this.props;
        return(
            <div>
                {cartItems.length === 0? <div className = "cart cart-header">Cart is Empty</div>
                :
                <div className = "cart cart-header">You have {cartItems.length} items in your cart</div>
                }
                <div>
                    <div className = "cart">
                        <div className = "cart-items">
                            {/* Create an item card for each item in cartItems */}
                            {cartItems.map(item =>(
                                <Card className = "item-card" key = {item.id}>
                                    <div className = "item-main">
                                    <div>
                                        <img src={item.image}></img>
                                    </div>
                                    <div className = "item-text">
                                        <div className = "item-title">
                                            <Typography variant="body2" >{item.title}</Typography></div>
                                        
                                        <div className = "right">
                                            ${item.price}  x {item.count} {"  "}

                                        {/* Button that performs removeFromCart on the ite, */}
                                        <Button onClick = {() => this.props.removeFromCart(item)} size="small" className = "button-primary" variant="outlined" color="primary">
                                        Remove
                                        </Button>
                                        </div>
                                        </div>
                                    </div>
                                
                                </Card>
                            ))}

                        </div>
                    </div>
                    <div className = "cart">

                        {/* Total Aggregator. Adds the price of any new added item to the current total cost */}
                        <div className = "total">
                            Total: ${cartItems.reduce((current,item) => current + item.price * item.count, 0)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}