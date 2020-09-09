// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


/**
 Crate by jgmiu on 20/09/08.
*/
// import React, {Component} from 'react';
// import PropTypes from 'prop-types'
// export default class App extends Component{
//   constructor(props) {
//     super(props)
//   }

//   componentDidMount() {
//   }

//   render() {
//     return(
//       <div className={'App'}>
//         <h1>{this.props.name}</h1>
//       </div>
//     )
//   }
// }

// App.protoTypes = {
//   name: PropTypes.string
// }
// App.defaultProps = {
//   name: '111'
// }

// function Person(name) {
//   this.name = name
// }

// Person.age = 12 

/**
 Crate by shaexiao on 20/09/08.
*/
// import React, {Component} from 'react'
// import PropTypes from 'prop-types'
// export default class App extends Component{
//   constructor(props) {
//     super(props)
//   }

//   componentDidMount() {
//   }

//   render() {
//     return(
//       <div className={'App'}></div>
//     )
//   }
// }

// App.protoTypes = {}
// App.defaultProps = {}

/**
 Crate by shaexiao on 20/09/08.
*/
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Son from './Son'
export default class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      value:'',
      son:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.test = this.test.bind(this)
  }
  handleChange(e){
    console.log(this)
    this.setState({value: e.target.value});
  }
  test(e){
    this.setState({
      son:e
    })
    console.log(e,'test')
  }
  componentDidMount() {
  }

  render() {
    return(
      <div className={'App'}>
        <div>from son:{this.state.son}</div>
        <input type='text' value={this.state.value} onChange={this.handleChange} />
        <Son name={this.state.value} test={this.test} />
      </div>
    )
  }
}

App.protoTypes = {}
App.defaultProps = {}