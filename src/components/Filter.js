import React, {Component} from 'react';
import "./filter.css";
import timeIcon from "./src/img/time.svg";
import rateIcon from "./src/img/rate.svg";
import insta from "./src/img/instagram.png";
import photoshop from "./src/img/photoshop.png";
import photo from "./src/img/photo.png";
import pencil from "./src/img/pencil.png";
import figma from "./src/img/figma.png";
import {Link} from "react-router-dom";

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    img: figma,
                    title: "Learn Figma",
                    author: "Christopher Morgan",
                    time: 5,
                    rate: 4.2,
                    id: "abcdef",
                    date: "03-02-2020",
                    votes: 25
                },
                {
                    img: photo,
                    title: "Analog photography",
                    author: "Christopher Morgan",
                    time: 6,
                    rate: 5.0,
                    id: "abcdf",
                    date: "02-02-2020",
                    votes: 21
                },
                {
                    img: insta,
                    title: "Master instagram",
                    author: "Sophie Gill",
                    time: 7,
                    rate: 4.1,
                    id: "acdef",
                    date: "14-02-2020",
                    votes: 19
                },
                {
                    img: pencil,
                    title: "Basics of drawing",
                    author: "Christopher Morgan",
                    time: 4,
                    rate: 4.3,
                    id: "abcef",
                    date: "12-02-2020",
                    votes: 15
                },
                {
                    img: photoshop,
                    title: "Photoshop - Essence",
                    author: "David Green",
                    time: 9,
                    rate: 4.0,
                    id: "abcd",
                    date: "11-02-2020",
                    votes: 28
                }
            ],
            categories: [
                {
                    title: "The Newest",
                    target: "time",
                },
                {
                    title: "Top Rated",
                    target: "rate",
                },
                {
                    title: "Most Popular",
                    target: "votes",
                },

            ],
            activeCategory: "all",
        }
    }
    render() {
        return (
            <div className={"filter-container"}>
                <div className={"categories"}>
                    <span onClick={() => this.toggleCategory("all")} className={`categorie-link ${"all" === this.state.activeCategory ? "active" : ""}`}>All courses</span>
                    {this.state.categories.map((item, id)=> (
                        <span key={id} onClick={() => this.toggleCategory(item.target)} data-slug={item.target} className={`categorie-link ${item.target === this.state.activeCategory ? "active" : ""}`}>
                            {item.title}
                        </span>
                    ))}
                </div>
                <div className="filter-items">
                    {
                        this.state.items.map(item => (
                            <div key={item.id} className={"filter-item"}>
                                <div className={"filter-item-details"}>
                                    <div className="filter-item-img">
                                        <img src={item.img} alt="i"/>
                                    </div>
                                    <div className="filter-item-desc">
                                        <span className="filter-item-title">{item.title}</span>
                                        <div className="filter-item-author">by {item.author}</div>
                                    </div>
                                </div>
                                <div className="filter-item-time">
                                    <img src={timeIcon} alt="icon"/>
                                    <span>{item.time}h</span>
                                </div>
                                <div className="filter-item-rate">
                                    <img src={rateIcon} alt="icon"/>
                                    <span>{item.rate}</span>
                                </div>
                                <div className="filter-item-link">
                                    <Link to={"#"}>View</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }

    toggleCategory = (slug) => {
        let items = this.state.items;
        items = items.sort((a, b) => {
            return (b[slug] - a[slug]);
        });
        this.setState({items: items, activeCategory: slug})
    }
}

export default Filter;
