import React, {Component} from 'react';
import Loader from 'react-loader';

class BasicExample extends Component {

    constructor() {
        super();
        this.state = {
            isLoaded: true
        }
    }

    toggleLoader = () => {
        this.setState({
            isLoaded: !this.state.isLoaded
        })
    };

    renderControl = (isLoaded) => {
        let buttonText;
        if (isLoaded) {
            buttonText = 'Show Loading Spinner'
        } else {
            buttonText = 'Hide Loading Spinner'
        }
        return <button onClick={this.toggleLoader}>{buttonText}</button>
    };

    render() {
        const {
            isLoaded
        } = this.state;
        return (
            <div>
                {this.renderControl(isLoaded)}
                <Loader loaded={isLoaded}>
                    I will show when loading is finished
                </Loader>
            </div>
        );
    }
}

export default BasicExample;