import React, { Component } from 'react';
import './App.css';
function Bannercontainer(props) {
    var left_scroll_style;
    switch (props.page_index){
        case "1":
            left_scroll_style="0"
            break;
        case "2":
            left_scroll_style="-100%"
            break;
        case "3":
            left_scroll_style="-200%"
            break;
        case "4":
            left_scroll_style="-300%"
            break;
        default:
            break;
    }
     return (
         <ul className="banner-container" style={{left:left_scroll_style}}>
             <li style={{background: "red"}} ></li>
             <li style={{background: "yellow"}} ></li>
             <li style={{background: "salmon"}} ></li>
             <li style={{background: "seagreen"}} ></li>
         </ul>
     );
}
class  Bannercontroller  extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
        handleClick(event) {
        var btn_text=event.target.innerText;
        this.props.onUserClick( btn_text);
}
    render(){
        return (
            <div onClick={ this.handleClick} className="banner-controller">
              <div><p>1</p></div>
              <div><p>2</p></div>
              <div><p>3</p></div>
              <div><p>4</p></div>
           </div>
        );
    }
}
var that;
class  Banner extends React.Component{
    constructor(props){
        super(props);
        this.state={
            page_index:"1"
        };
        this.handleUserClick=this.handleUserClick.bind(this);
        that=this;
    }
      timer=setInterval(function () {
          var  next_index = (Number.parseInt(that.state.page_index) + 1).toString();
          if(next_index=="5") {
              next_index="1"
          }
         that.setState({
              page_index:next_index
          });
      },5000);
    handleUserClick(page_index){
        this.setState({
            page_index:page_index
        });}
    render(){

         return (
                  <div className="sections">
                     <Bannercontainer page_index={this.state.page_index}/>
                     <Bannercontroller onUserClick={this.handleUserClick} page_index={this.state.page_index}/>
                  </div>
                  );
     }
}
export default Banner;
