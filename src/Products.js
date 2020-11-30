import React from "react";
import {Grid, Card, CardMedia, Typography, CardActions, CardContent, Button} from '@material-ui/core';
import './index.css';

//Products takes in an array of products, and returns them as product cards that are visible on the screen
export default class Products extends React.Component{
    render() {
        return(
            <div>
                <div className = "products">
                    {this.props.products.map(product => (
                        <div key = {product.id}>

                            {/* Product Card */}
                            <Card className = "product">
                                <a href = {"#" + product.id}>
                                    <img src = {product.image} className = "product-img"></img>
                                </a>
                                <CardContent>
                                <Typography variant="h5" component="h4">
                                     {product.title}
                                </Typography>
                                </CardContent>

                                {/* list all the shoe's available sizes */}
                                <span className="sizeTitle">Available Sizes:</span>
                                <div className = "productSizes">
                                    {product.availableSizes.map(size => (
                                        <span>{size}{" "}</span> 
                                    ))}
                                </div>
                                    
                                <div className = "price">
                                    <Typography className = "product-price">
                                        ${product.price}
                                    </Typography>
                                    {/* Button that adds the product to cart by calling this.props.addToCart */}
                                    <Button onClick = {() => this.props.addToCart(product)} className = "button-primary" variant="outlined" color="primary">
                                    Add to Cart
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}