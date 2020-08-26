import React ,{Component } from 'react';
import Button from "../Button";
import Time from "../Time"
import './App.css';
import * as math from 'mathjs';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        input : "",
        count : "",
    };
  }

  handleButtonPress = content => () =>{
    this.incrementCount();
      if(content==="x")
      {
        this.setState({input : this.state.input + "*"}); 
      }
      else if(content==="÷")
      {
        this.setState({input : this.state.input + "/"}); 
      }
      else{
        this.setState({input : this.state.input + content}); 
      }
  };

  incrementCount() {
    // Note: this will *not* work as intended.
    this.setState({count: math.evaluate(this.state.count + 1)});
  }

  handleButtonEqual =content =>() =>{
    this.setState({input : math.evaluate(this.state.input)});
    this.setState({count:""})
  }

  handleButtonClear = content => () =>{
    this.setState({input : "" });
    this.setState({count:""})
  }

  handleButtonPercentage = content => () =>{
    this.setState({input : this.state.input / 100});
  }

  handleButtonDelete = content => () =>{
    this.setState({input : this.state.input.substring(0,this.state.input.length-1)});
  }

  render()
  {
    if(this.state.count <= 7)
    {
      return (
        <div className="App">
        <div className="top-bar"><Time/></div>
        <div className="display">{this.state.input}</div>
        <div className="buttons">
            <Button onButtonClick={this.handleButtonClear} content="AC" />
            <Button onButtonClick={this.handleButtonPercentage} content="%" />
            <Button onButtonClick={this.handleButtonDelete} content="del"/>
            <Button onButtonClick={this.handleButtonPress} content="÷" />
            <Button onButtonClick={this.handleButtonPress} content="7" />
            <Button onButtonClick={this.handleButtonPress} content="8" />
            <Button onButtonClick={this.handleButtonPress} content="9" />
            <Button onButtonClick={this.handleButtonPress} content="x" />
            <Button onButtonClick={this.handleButtonPress} content="4" />
            <Button onButtonClick={this.handleButtonPress} content="5" />
            <Button onButtonClick={this.handleButtonPress} content="6" />
            <Button onButtonClick={this.handleButtonPress} content="-"  />
            <Button onButtonClick={this.handleButtonPress} content="1" />
            <Button onButtonClick={this.handleButtonPress} content="2" />
            <Button onButtonClick={this.handleButtonPress} content="3" />
            <Button onButtonClick={this.handleButtonPress} content="+"  />
            <Button onButtonClick={this.handleButtonPress} content="00" />
            <Button onButtonClick={this.handleButtonPress} content="0" />
            <Button onButtonClick={this.handleButtonPress} content="." />
            <Button onButtonClick={this.handleButtonEqual} content="=" />
        </div>
        <div className="bottom-bar"></div>
        </div>
        
      );
    }

    else if(this.state.count<=11){
      return (
        <div className="App">
        <div className="top-bar"><Time/></div>
        <div className="displayMid">{this.state.input}</div>
        <div className="buttons">
            <Button onButtonClick={this.handleButtonClear} content="AC" type="function" />
            <Button onButtonClick={this.handleButtonPercentage} content="%" type="function" />
            <Button onButtonClick={this.handleButtonDelete} content="del"type="function" />
            <Button onButtonClick={this.handleButtonPress} content="÷" type="operator" />
            <Button onButtonClick={this.handleButtonPress} content="7" />
            <Button onButtonClick={this.handleButtonPress} content="8" />
            <Button onButtonClick={this.handleButtonPress} content="9" />
            <Button onButtonClick={this.handleButtonPress} content="x" type="operator" />
            <Button onButtonClick={this.handleButtonPress} content="4" />
            <Button onButtonClick={this.handleButtonPress} content="5" />
            <Button onButtonClick={this.handleButtonPress} content="6" />
            <Button onButtonClick={this.handleButtonPress} content="-" type="operator" />
            <Button onButtonClick={this.handleButtonPress} content="1" />
            <Button onButtonClick={this.handleButtonPress} content="2" />
            <Button onButtonClick={this.handleButtonPress} content="3" />
            <Button onButtonClick={this.handleButtonPress} content="+" type="operator" />
            <Button onButtonClick={this.handleButtonPress} content="00" />
            <Button onButtonClick={this.handleButtonPress} content="0" />
            <Button onButtonClick={this.handleButtonPress} content="." />
            <Button onButtonClick={this.handleButtonEqual} content="=" type="operator" />
        </div>
        <div className="bottom-bar"></div>
        </div>
        
      );
    }
    else{
      return (
        <div className="App">
        <div className="top-bar"><Time/></div>
        <div className="displaySmall">{this.state.input}</div>
        <div className="buttons">
            <Button onButtonClick={this.handleButtonClear} content="AC" type="function" />
            <Button onButtonClick={this.handleButtonPercentage} content="%" type="function" />
            <Button onButtonClick={this.handleButtonDelete} content="del" type="function" />
            <Button onButtonClick={this.handleButtonPress} content="÷" type="operator" />
            <Button onButtonClick={this.handleButtonPress} content="7" />
            <Button onButtonClick={this.handleButtonPress} content="8" />
            <Button onButtonClick={this.handleButtonPress} content="9" />
            <Button onButtonClick={this.handleButtonPress} content="x" type="operator" />
            <Button onButtonClick={this.handleButtonPress} content="4" />
            <Button onButtonClick={this.handleButtonPress} content="5" />
            <Button onButtonClick={this.handleButtonPress} content="6" />
            <Button onButtonClick={this.handleButtonPress} content="-" type="operator" />
            <Button onButtonClick={this.handleButtonPress} content="1" />
            <Button onButtonClick={this.handleButtonPress} content="2" />
            <Button onButtonClick={this.handleButtonPress} content="3" />
            <Button onButtonClick={this.handleButtonPress} content="+" type="operator" />
            <Button onButtonClick={this.handleButtonPress} content="00" />
            <Button onButtonClick={this.handleButtonPress} content="0" />
            <Button onButtonClick={this.handleButtonPress} content="." />
            <Button onButtonClick={this.handleButtonEqual} content="=" type="operator" />
        </div>
        <div className="bottom-bar"></div>
        </div>
        
      );
  
    }
    
  }
  
}

export default App;
