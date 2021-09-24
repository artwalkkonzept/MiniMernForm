// We use Route in order to define the different routes of our applicatio
import React, {Component} from 'react';
import {Router} from "@reach/router";
//import { Route } from "react-router-dom";
// We import all the components we need in our app
import Navbar from "./Component/navbar";
import Record from "./Component/Note/Record";
import Records from "./Component/Note/Records";
//import Gallery from "./Component/Gallery/Gallery";



class App extends Component {
    // API url from the file '.env' OR the file '.env.development'.
    // The first file is only used in production.
    API_URL = process.env.REACT_APP_API_URL;

    constructor(props) {
        super(props);
        this.state = {
            //artwalks: [],

            records: []
        };
    }

    componentDidMount() {
        // Get everything from the API

        this.getRecords().then(() => console.log("Records got it!"));
    }

async getRecords() {
        let url = `${this.API_URL}/records`; // URL of the API.
        let result = await fetch(url); // Get the data
        let json = await result.json(); // Turn it into json
        return this.setState({ // Set it in the state
            records: json
        })

    }

    getRecord(id) {
        // Find the relevant artwalk by id
        return this.state.records.find(k => k._id === id);
    }

    render() {
        return (
            
            <>
                <Router>

                    <Record path="/record/:id" getRecord={id => this.getRecord(id)}/>
                    <Records path="/" records={this.state.records}/>
                </Router>
            </>
        );
    }
}

export default App;