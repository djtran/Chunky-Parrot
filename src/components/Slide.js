import React from 'react'
import { Card, Container, Form, Row, Image } from 'react-bootstrap';
class Slide extends React.Component {

    constructor(props) {
        super(props);
        this.state = { response: this.props.response };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //update the textarea
        this.setState({ response: event.target.value });
        //provide data to the parent sequence
        this.props.handleResponseData(event);
    }

    render() {
        return <Container>
            <Card>
                <Card.Body>
                    {this.props.prompt}
                </Card.Body>
            </Card>
            <br />
            <Form.Control
                as="textarea"
                placeholder="Author your thoughts here"
                id={this.props.id}
                name={this.props.id}
                value={this.state.response}
                onChange={this.handleChange} />
        </Container>
    }
}

export default Slide;