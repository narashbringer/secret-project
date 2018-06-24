import React, { Component } from "react";
import 'react-chat-elements/dist/main.css';
// MessageBox component
import { MessageBox } from 'react-chat-elements';
import { ChatList } from 'react-chat-elements'


export default class message extends Component {
constructor(props){
    super(props)
    this.state={

    }
}
componentWillMount(){
   
    if(this.props.isAuthenticated){
        
    }else{
        this.props.history.push("/login");
    }
}

render(){
    return(
        <ChatList
    className='chat-list'
    dataSource={[
        {
            avatar: 'https://facebook.github.io/react/img/logo.svg',
            alt: 'Reactjs',
            title: 'Facebook',
            subtitle: 'What are you doing?',
            date: new Date(),
            unread: 0,
        },
    ]} />
    )
}


}