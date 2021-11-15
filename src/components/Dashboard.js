import React, {Component} from 'react';
import SideMenu from "./SideMenu";
import "./dashboard.css";
import illustration from "./src/img/men_illustration.svg"
import profil_icone from "./src/img/profil-photo.png"
import book from "./src/img/open-book_icon.svg"
import search from "./src/img/search-icon.svg"
import notif from "./src/img/notif_icon.svg"
import Slider from "./Slider";
import Filter from "./Filter";
import LearnGraph from "./LearnGraph";
import MobileMenu from "./MobileMenu";

class Dashboard extends Component {
    render() {
        return (
            <div className={"dash__container"}>
               <div className="side-menu">
                   <SideMenu/>
               </div>
                <div>
                    <MobileMenu/>
                </div>
                <main>
                    <section className="resume">
                        <HelloCard name={"Josh"}/>
                        <LangSlider/>
                        <div className="filters">
                            <h2>Courses</h2>
                            <Filter/>
                        </div>
                    </section>
                    <section className={"details"}>
                        <header>
                            <form className={"search-bar"}>
                                <img src={search} alt="icon"/>
                                <input type={"search"}/>
                            </form>
                            <div className="notification">
                                <img src={notif} alt="icon"/>
                                <span className="number">1</span>
                            </div>
                            <div className="user-photo">
                                <img src={profil_icone} alt="icone"/>
                            </div>
                        </header>
                        <div className="number-stats">
                            <div className="completed">
                                <span className="number">
                                    11
                                </span>
                                <span className={"text"}>
                                    Courses <br/> completed
                                </span>
                            </div>
                            <div className="inprogress">
                                <span className="number">
                                    4
                                </span>
                                <span className={"text"}>
                                    Courses <br/> in progress
                                </span>
                            </div>
                        </div>
                        <div className="graph-stats">
                            <h2>Your statistics</h2>
                            <ul className="filters">
                                <li className={"active"}>Learning Hours</li>
                                <li>My courses</li>
                                <li className={"date-filter"}>Weekly</li>
                            </ul>
                            <div className={"graph-content"}>
                                <LearnGraph/>
                            </div>
                        </div>
                        <div className="more">
                            <div className="content">
                                <h2>Learn even more!</h2>
                                <p>Unlock premium features only for 8 € per month.</p>
                                <button>Go premium</button>
                            </div>
                            <img src={book} alt="livre" className="illustration"/>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

const HelloCard = (props) => (
    <div className="hello-card">
        <div className="hello__content">
            <p className="hello__title">
                Hello {props.name ? props.name : ""} !
            </p>
            <p className={"hello__text"}>It's good to see you again.</p>
            <img src={illustration} alt="icon" className="hello__illustration"/>
        </div>
    </div>
)

const LangSlider = ({items}) => (
    <div className="lang-slider">
        <Slider items={items}/>
    </div>
)

export default Dashboard;
