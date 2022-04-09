import React, { Component } from 'react';
import "./Home.css"
import styles from "./Home.module.css"

class Home extends Component {
    constructor(params) {
        super(params)

        console.log("constructor: ", document.getElementById("homePageTitle"));
    }

    componentDidMount() {
        console.log("componentDidMount: ", document.getElementById("homePageTitle"));
    }

    render() {
        console.log("render");
        console.log(styles);

        return (
            <div>
                <h1 id='homePageTitle'>Home page</h1>

                <div style={{color: "white", backgroundColor: "green"}}>Inline style</div>

                <div className={styles.cssModule}>CSS Module</div>
            </div>
        );
    }
}

export default Home;