import React, { Component } from 'react';

import './App.css';
import Form from './components/form/form.component';
import Message from './components/message/message.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        messageType: 'candidateInvite',
        interviewType: 'f2f',
        candidateFirstName: '',
        candidateLastName: '',
        candidateRole: '',
        candidatePhone: '',
        candidateEmail: '',
        interviewDate: '',
        interviewDuration: '',
        interviewLocation: '',
        interviewerFirstName: '',
        interviewerLastName: '',
        interviewerRole: '',
        isSubmited: false
     }
    }
     
  handleChange = (e) => {
      // check it out: we get the evt.target.name (which will be either "email" or "password")
      // and use it to target the key on our `state` object with the same name, using bracket syntax
      this.setState({ [e.target.name]: e.target.value }, console.log(this.state));
    }

  handleSubmit = (e, prevState, prevProps) => {
    console.log('handle submit')
    e.preventDefault();
    this.setState({ isSubmited: !this.state.isSubmited });


  }

  
  render() { 
    let {isSubmited} = this.state;
    return ( <div className="app">
      <div className="container">
        <h1>Message Builder</h1>
        {(!isSubmited) ? 
        <Form formValues={this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/> 
        : 
        <Message formValues={this.state}/> }
        
    </div>

    </div> );
  }
}

 
export default App;

