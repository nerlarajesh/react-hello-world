import React from 'react';
class AwesomeComponent extends React.Component {
  render () {
  return (
    <div>
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
  }
}
class Content extends React.Component{
  render(){
    return(
        <p> Hello React! Welcome to the First React Application</p>
    )
  }
}
class Header extends React.Component{
    render(){
        return(
            <h2>This is Header</h2>
        );
    }
}
class Footer extends React.Component{
    render(){
        return(
            <h2>This is Footer</h2>
        );
    }
}

export default AwesomeComponent;