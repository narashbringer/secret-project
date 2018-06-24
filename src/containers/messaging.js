import React, { Component } from "react";
import 'react-chat-elements/dist/main.css';
// MessageBox component
import { MessageBox } from 'react-chat-elements';
import { ChatList } from 'react-chat-elements'


export default class message extends Component {
constructor(props){
    super(props)
    this.state={
        loadedOnce:false,
        groupArray:[],
        chatArray:[]
    }
}
componentWillMount(){
   
    if(this.props.isAuthenticated){
        this.getdms()
    }else{
        this.props.history.push("/login");
    }
}

render(){
    return(
        <ChatList
    className='chat-list'
    dataSource={this.state.chatArray}/>
    // dataSource={[
    //     {
    //         avatar: 'https://facebook.github.io/react/img/logo.svg',
    //         alt: 'Reactjs',
    //         title: 'Facebook',
    //         subtitle: 'What are you doing?',
    //         date: new Date(),
    //         unread: 0,
    //     },
    // ]} />
    )
}
getdms(){
   var things=this.props.user.split(",")
   console.log(things[1])
    if( this.state.loadedOnce==false){
    var http = new XMLHttpRequest();
     var url = this.props.baseurl+"allcon/"+things[5]+".json";
       http.open("GET", url, true);
        http.setRequestHeader("Content-type", "application/json");
        http.setRequestHeader("access-token",things[3]);
        http.setRequestHeader("uid",things[2] );
        http.setRequestHeader("expiry", things[0]);
        http.setRequestHeader("client", things[1]);
   var p=things[5]
  this.setState({loadedOnce: true})
     var y =[]
    http.onreadystatechange = function() {
    //var d= day
        if(http.readyState == 4 && http.status == 200) {
          var e=JSON.parse( http.responseText)
         
         //console.log(e)w
          for(var i=0; i<e.length; i++){   
              y.push(e[i])
              console.log(e[i])
  
  }
      
      }
            if(http.readyState == 4 && http.status == 500) {
  
            } 
                          
          
        }
        //'2018-03-08T00:58:21.533-05:00'
      
    http.send();
    setTimeout(() => {
      var dm=[]
      var multi=[]
    for(var i=0; i<y.length; i++){
  if(!this.state.chatArray){
    this.state.chatArray=[]
  }
    var time=""+y[i]["created_at"].substring(5,7)+"/"+y[i]["created_at"].substring(8,10)+"/"+y[i]["created_at"].substring(2,4)
  
    if(y[i]["type"]=="dm"){
      var name=""
      if (y[i]["sender_id"]==p){
        name=y[i]["recipient_name"]
      }else   if (y[i]["recipient_id"]==p)
      name=y[i]["sender_name"]
      dm.unshift({
        'avatar': 'https://facebook.github.io/react/img/logo.svg',
    'id':y[i]["id"],
    'title': name,
    'sender_id':y[i]["sender_id"],
    'recipient_id':y[i]["recipient_id"],
    'reative_time':time,
    'last_message':y[i]["body"],
    'name': name,
    'user_id':this.props.user_id,
     'uid':this.props.uid,
     'expiry':this.props.expiry,
     'token':this.props.token,
      'client': this.props.client,
       'first_name':this.props.first_name, 
     'last_name':this.props.last_name,
    'username':this.props.username, 
    'provider_id':this.props.provider_id,
    "unread":0,
        })
        this.setState({chatArray:dm})
       }else if(y[i]["type"]=="group")
       dm.unshift({
        'avatar': 'https://facebook.github.io/react/img/logo.svg',
        'type':'group',
        'id':y[i]["id"],
        'title': y[i]["title"],
        'sender_id':y[i]["sender_id"],
        'date':time,
        'subtitle':y[i]["body"],
        'name': "",
          'user_id':this.props.user_id,
        'uid':this.props.uid,
        'expiry':this.props.expiry,
        'token':this.props.token,
         'client': this.props.client,
          'first_name':this.props.first_name, 
        'last_name':this.props.last_name,
       'username':this.props.username, 
       'provider_id':this.props.provider_id,
       "unread":0,
            })
            console.log(multi)
          }
          this.setState({chatArray:dm})
          this.setState({groupArray:multi})
    },1000);
      }
  }


}