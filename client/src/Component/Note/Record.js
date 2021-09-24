import React, {Component} from 'react';
import {Link} from "@reach/router";

class Record extends Component {
    render() {
        const record = this.props.getRecord(this.props.id);
        let content = <p>Loading</p>;
        if (record) {
            content =
                <>
                    <h1>Title</h1>
                    <div className="container" >
                    <h2>{record.article_title}</h2>

                    <h5>Description</h5>
                    <ul>
                        {record.article_description.map(h => <li key={h}>{h}</li>)}
                    </ul>
                    <Link to="/">Back</Link>
                </div>
                    </>
        }
        return content;
    }
}

export default Record;

