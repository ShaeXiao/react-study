/**
 Crate by shaexiao on 20/09/08.
*/
import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class Son extends Component{
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            value:''
        }
        this.handleInput = this.handleInput.bind(this)
    }
    handleInput(e){
        this.setState({value:e.target.value})
        this.props.test(e.target.value)
    }
    componentDidMount() {
    }

    render() {
        const num = [1,2,3];
        const listItems = num.map((number,index) =>
                <li key={index}>{number}</li>
                );
        return(
            <div className={'Son'}>
                {this.props.name}
                <input type='text' value={this.state.value} onChange={this.handleInput} />
                {/* <ul>{listItems}</ul> */}
                <ul>
                    {
                        num.map((number) =>
                            <li key={number.toString()}>{number}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

Son.protoTypes = {}
Son.defaultProps = {}