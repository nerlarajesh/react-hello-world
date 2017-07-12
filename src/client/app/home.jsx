import React from 'react';
import {render} from 'react-dom';
class App extends React.Component {
  render () {
  return (
    <div>
        <header/>
        <p> Hello React! Welcome to the First React Application</p>
        <footer/>
    </div>
  );
  }
}
class header extends React.Component{
    render(){
        return(
            <h2>This is Header</h2>
        );
    }
}
class footer extends React.Component{
    render(){
        return(
            <h2>This is Footer</h2>
        );
    }
}

render(<App/>, document.getElementById('content'));