import React from 'react'
import Slide from 'components/Slide'
import { Card, ProgressBar, Button, Container, Row } from 'react-bootstrap'
class Sequence extends React.Component {

    constructor(props) {
        super(props);

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleResponseData = this.handleResponseData.bind(this);
        this.complete = this.complete.bind(this);
        this.render = this.render.bind(this);

        this.state = {
            index: 0,
            responses: [],
            result: ''
        };
    }

    handleResponseData(event) {
        this.state.responses[this.state.index] = event.target.value;
        
        this.complete();
    }

    handleNext() {
        let current = this.state.index;
        let nextIndex = Math.min(this.state.index + 1, this.props.sequence.length - 1);
        if (nextIndex == current) {
        }
        this.setState({
            index: nextIndex
        })
    }

    handleBack() {
        let backIndex = Math.max(this.state.index - 1, 0);
        this.setState({
            index: backIndex
        })
    }

    complete() {
        this.setState({
            result: this.state.responses.join(' ')
        })
    }

    render() {
        let current = this.props.sequence[this.state.index]
        let resp = this.state.responses[this.state.index];
        let progress = (this.state.index + 1) / this.props.sequence.length * 100;

        if (!resp) {
            console.log("No response for this slide yet");
            resp = "";
        }
        return <Container className="text-center">

            <Row>
                <Slide
                    key={current.id}
                    prompt={current.prompt}
                    response={resp}
                    handleResponseData={this.handleResponseData}
                />
            </Row>

            <br />

            <ProgressBar
                animated
                variant="success"
                now={progress}
                label={`${this.state.index + 1} of ${this.props.sequence.length}`} />
            <br />

            <Card className="col">
                <Card.Body>
                    {this.state.result}
                </Card.Body>
            </Card>
            <br />
            <Row >
                <Button
                    className="col"
                    variant="success"
                    onClick={this.handleBack}>
                    Back
                </Button>
                <div className="col-8" />
                <Button
                    className="col"
                    variant="success"
                    onClick={this.handleNext}>
                    Next
                </Button>
            </Row>
        </Container>

    }
}

export default Sequence;