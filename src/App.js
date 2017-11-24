import React, { Component } from 'react';
import './App.css';
import Toolbar from './Toolbar';
import Message from './Message';
import MessageList from './MessageList';

class App extends Component {

  state = {
    messages: [
      {
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "read": false,
        "starred": true,
        "labels": ["dev", "personal"]
      },
      {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "read": false,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 3,
        "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
        "read": false,
        "starred": true,
        "labels": ["dev"]
      },
      {
        "id": 4,
        "subject": "We need to program the primary TCP hard drive!",
        "read": true,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 5,
        "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
        "read": false,
        "starred": false,
        "labels": ["personal"]
      },
      {
        "id": 6,
        "subject": "We need to back up the wireless GB driver!",
        "read": true,
        "starred": true,
        "labels": []
      },
      {
        "id": 7,
        "subject": "We need to index the mobile PCI bus!",
        "read": true,
        "starred": false,
        "labels": ["dev", "personal"]
      },
      {
        "id": 8,
        "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
        "read": true,
        "starred": true,
        "labels": []
      }
    ]
  }


  toggleRead = (selectedMessage) => {
    let otherMessages = this.state.messages.filter(message => selectedMessage.id != message.id)
    let changedMessage = {
      id: selectedMessage.id,
      subject: selectedMessage.subject,
      read: !selectedMessage.read,
      starred: selectedMessage.starred,
      labels: selectedMessage.labels
    }
    this.setState({messages: otherMessages.concat(changedMessage ).sort((a, b) => a.id - b.id)})
  }

  handleChecked = (checkedMessage) => {
    let otherMessages = this.state.messages.filter(message => checkedMessage.id != message.id)
    let changedMessage = {
      id: checkedMessage.id,
      subject: checkedMessage.subject,
      read: checkedMessage.read,
      starred: checkedMessage.starred,
      labels: checkedMessage.label,
      selected: !checkedMessage.selected
    }
    this.setState({messages: otherMessages.concat(changedMessage ).sort((a, b) => a.id - b.id)})
  }

  handleStarred = (starredMessage) => {
    let otherMessages = this.state.messages.filter(message => starredMessage.id != message.id)
    let changedMessage = {
      id: starredMessage.id,
      subject: starredMessage.subject,
      read: starredMessage.read,
      starred: !starredMessage.starred,
      labels: starredMessage.label,
      selected: starredMessage.selected
    }
    this.setState({messages: otherMessages.concat(changedMessage ).sort((a, b) => a.id - b.id)})
  }

  render() {
    return (
      <div className="App">
        <Toolbar
          messages={this.state.messages}
        />
        <MessageList
          messages={this.state.messages}
          toggleRead={this.toggleRead}
          handleChecked={this.handleChecked}
          handleStarred={this.handleStarred}
        />
      </div>
    );
  }
}

export default App;
