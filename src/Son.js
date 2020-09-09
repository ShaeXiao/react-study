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
        return(
            <div className={'Son'}>
                {this.props.name}
                <input type='text' value={this.state.value} onChange={this.handleInput} />
                {/* <span>{this.props.test('dd')}</span> */}
            </div>
        )
    }
}

Son.protoTypes = {}
Son.defaultProps = {}