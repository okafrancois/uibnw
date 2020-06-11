import React, {Component} from 'react';
import SideMenu from "./SideMenu";
import "./dashboard.css";
import illustration from  "./men_illustration.svg"

class Dashboard extends Component {
    render() {
        return (
            <div className={"dash__container"}>
               <div className="side-menu">
                   <SideMenu/>
               </div>
                <section className="resume">
                    <HelloCard name={"Josh"}/>
                </section>
                <section className={"details"}>

                </section>
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

export default Dashboard;