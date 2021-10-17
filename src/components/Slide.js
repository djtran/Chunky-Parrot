import React from 'react'
class Slide extends React.Component {

    constructor(props) {
        super(props);
        this.state = {response: this.props.response};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //update the textarea
        this.setState({response: event.target.value});
        //provide data to the parent sequence
        this.props.handleResponseData(event);
    }

    render() {
        return <div>
                <h3> {this.props.prompt} </h3>
                <br/>
                <textarea 
                    id={this.props.id}
                    name={this.props.id}
                    value={this.state.response} 
                    onChange={this.handleChange} />
            </div>
    }
}

export default Slide;