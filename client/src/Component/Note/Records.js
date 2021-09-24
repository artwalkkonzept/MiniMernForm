import React, {Component} from 'react';
import {Link} from "@reach/router";

class Records extends Component {

    render() {
        const records = this.props.records.map(record =>
            <li className="container" key={record._id}>
                <Link to={`/record/${record._id}`}>{record.article_title}</Link>
            </li>
        );
        return (
            <>
                <h1>Records</h1>
                <ol>
                    {records}
                </ol>
            </>
        );
    }

}

export default Records;
