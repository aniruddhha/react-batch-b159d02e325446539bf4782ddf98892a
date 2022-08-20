import React from "react";

export class BaseCounter extends React.Component {

    constructor(props) {
        super()
        this.cnt = 0;
        this.state = { cnt : 0 }

        // this.setState( { cnt : 1})
    }

    render() {
        return (
            <>
                <h1> {this.state.cnt} </h1>
            </>
        )
    }

    componentDidMount() {
        setInterval( () => this.setState({ cnt : this.cnt++ }), 1200 )
    }
}