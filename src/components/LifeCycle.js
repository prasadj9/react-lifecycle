import { Component } from 'react';
class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor initializing state");
        this.state = {count : 0};
    }

    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps : Before render");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Update ? ");
        return nextState.count !== this.state.count;
    }

    render() {
        console.log("Render");
        return (
            <div>
                <p>Count : {this.state.count} </p>
                <button onClick={() => this.setState({count : this.state.count + 1})} >Increment</button>
            </div>
        )
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate : Before dom update");
        return null;
    }

    componentDidMount() {
        console.log("Component mounted");
    }

    componentDidUpdate() {
        console.log("Component updated");
    }
    
    componentWillUnmount() {
        console.log("Component unmounting...");

    }
}

export default LifeCycle;