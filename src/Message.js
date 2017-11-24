import React, {Component} from 'react';

class Message extends Component {
  render(){

    let {message} = this.props




    return(
      <div
      className={`row message
        ${
          message.read === true
            ? 'read'
            : 'unread'
        }
        ${
          message.selected === true
            ? 'selected'
            : ''
        }`
      }
      >
        <div className="col-xs-1">
          <div className="row">
            <div
              className="col-xs-2"
              onClick={() => this.props.handleChecked(message)}

            >
            {
              message.selected === true
                ? <input type="checkbox" checked/>
                : <input type="checkbox" />
            }
            </div>
            <div className="col-xs-2">
            <i className={`star fa
              ${
                message.starred === true
                  ? "fa-star"
                  : "fa-star-o"
              }`}
              onClick={() => this.props.handleStarred(message)}
            ></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
      
        <a
          href="#"
          className="pull-left"
          onClick={() => this.props.toggleRead(message)}
        >
          {message.subject}
        </a>
      </div>
    </div>
    )
  }
}


export default Message;
