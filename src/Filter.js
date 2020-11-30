import React from "react";
import {Grid, Card, CardMedia, Typography, CardActions, CardContent, Button} from '@material-ui/core';
import './index.css';

//Returns the div containing the three filters. Takes in as props the filters for sorting and filtering, as well as the state trackers of what to sort/filter by
export default class Filter extends React.Component{
    render() {
        return(
            <div className = "filter">
                <div className="FilterResult">
                    {this.props.count} Products
                </div>
                <div className="FilterSort">
                    {/* Sort selection */}
                    Sort By{" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts} >
                        <option value = "">
                            Most Popular
                        </option>
                        <option value = "Lowest">
                            Price (Low to High)
                        </option>
                        <option value = "Highest">
                            Price (High to Low)
                        </option>
                    </select>
                </div>

                {/* Filter by Size selection */}
                <div className = "FilterSize">
                    Select Size{" "} <select value={this.props.size} onChange={this.props.filterSizeProducts} >
                        <option value = "">
                            All
                        </option>
                        <option value = "6">
                            6
                        </option>
                        <option value = "7">
                            7
                        </option>
                        <option value = "8">
                            8
                        </option>
                        <option value = "9">
                            9
                        </option>
                        <option value = "10">
                            10
                        </option>
                        <option value = "11">
                            11
                        </option>
                    </select>
                </div>

                {/* Filter by Line selection */}
                <div className = "FilterLine" >
                    Select Line{"  "} <select value={this.props.line} onChange = {this.props.filterLineProducts}>
                        <option value = "">
                            All
                        </option>
                        <option value = "Air Force">
                        Air Force
                        </option>
                        <option value = "Air Max">
                            Air Max
                        </option>
                        <option value = "Air Jordan">
                            Air Jordan
                        </option>
                    </select>
                </div>
            </div>
        )
    }
}