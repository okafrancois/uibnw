import React, {Component} from 'react';
import leftArrow from "./src/img/left-arrow.svg";
import rightArrow from "./src/img/right-arrow.svg";
import spanish from "./src/img/spanish.png";
import {Link} from "react-router-dom";
import "./slider.css"

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        }
    }
    render() {
        return (
            <div className={"slider-container"}>
                <div className="slider-items">
                    <div className={"slider-item"}>
                        <div className={"item-details"}>
                            <div className="item-img">
                                <img src={spanish} alt="illustration"/>
                            </div>
                            <div className="item-desc">
                                <span className="item-title">Spanish B2</span>
                                <div className="item-author">by Alejandro Velazquez</div>
                            </div>
                        </div>
                        <div className="item-completion">
                            <span>83%</span>
                        </div>
                        <div className="item-link">
                            <Link to={"#"}>Continue</Link>
                        </div>
                    </div>
                </div>
                <div className="slider-commands">
                    <button className={"left-arrow"}>
                        <img src={leftArrow} alt="icon"/>
                    </button>
                    <button className={"right-arrow"}>
                        <img src={rightArrow} alt="icon"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default Slider;
