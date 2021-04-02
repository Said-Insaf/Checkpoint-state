import React, { Component } from 'react';
import Info from './Info'

export default class Profile extends Component {
    state={
        show:true,
        count:0
    }
    handleClick=()=>{
        this.setState({show:!this.state.show})
    }
    componentDidMount(){
   setInterval(()=>this.setState({count:this.state.count+1}),1000)}
    render() {
        return (
          <div>
            {this.state.show ? (
              <Info
                fullName="Insaf SAID"
                bio="Development Web"
                profession="PhD Student"
              />
            ) : null}
            <button className="butt" onClick={this.handleClick}>
              Toogle show
            </button>
            <h2>{this.state.count}</h2>
          </div>
        );
    }
}