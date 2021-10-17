import React from 'react'
import Slide from 'components/Slide'
class Sequence extends React.Component {

    constructor(props) {
        super(props);

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleResponseData = this.handleResponseData.bind(this);
        this.complete = this.complete.bind(this);
        this.render = this.render.bind(this);

        this.state = {
            index : 0,
            responses: [],
            result: ''
        };
    }

    handleResponseData(event) {
        this.state.responses[this.state.index] = event.target.value;
        // this.responses[this.state.index] = event.target.value;
    }

    handleNext() {
        let current = this.state.index;
        let nextIndex = Math.min(this.state.index + 1, this.props.sequence.length - 1);
        if (nextIndex == current) {
            this.complete();
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
            result: this.state.responses.join()
        })
    }

    render() {
        let current = this.props.sequence[this.state.index]
        let resp = this.state.responses[this.state.index];
        if (!resp) {
            console.log("No response for this slide yet");
            resp = "";
        }
        return <div>
            <Slide 
                    key={current.id}
                    prompt={current.prompt} 
                    response={resp}
                    handleResponseData={this.handleResponseData} 
                />

            <br/>
            #{this.state.index + 1} out of {this.props.sequence.length}
            <br/>
            <button onClick={this.handleBack}>
                Back
            </button>
            <button onClick={this.handleNext}>
                Next
            </button>
            <div id="donedone">
                {this.state.result}
            </div>
        </div>
            
    }
}

export default Sequence;