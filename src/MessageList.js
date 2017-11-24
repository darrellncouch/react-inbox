import React, {Component} from 'react';
import Message from './Message';

class MessageList extends Component {
  render(){

    let emails = this.props.messages.map(message => {
      return(
        <Message
          key={message.id}
          message={message}
          toggleRead={this.props.toggleRead}
          handleChecked={this.props.handleChecked}
          handleStarred={this.props.handleStarred}
        />
      )
    })

    return(
      <div>
        {emails}
      </div>
    )
  }
}


export default MessageList;
