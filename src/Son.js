/**
 Crate by shaexiao on 20/09/08.
*/
import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class Son extends Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return(
            <div className={'Son'}>
                {this.props.name}
            </div>
        )
    }
}

Son.protoTypes = {}
Son.defaultProps = {}