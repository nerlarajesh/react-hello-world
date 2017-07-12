import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
class App extends React.Component {
  render () {
  return (
    <div>
    	<h1>Hello, {this.props.name} {this.props.value}</h1>
        <AwesomeComponent />
    </div>
  );
  }
}
render(<App name="welcome" value="Rajesh"/>, document.getElementById('app'));