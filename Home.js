
import React, { Component } from 'react';
import Memoji from '../images/Memoji.jpg';



class Home extends Component{
    render() {
        return(
            <div className="bodyCopy">
<h1>Welcome Friends</h1> 
<img src={Memoji}  alt="Memoji Dee" className="center shake-slow shake-constant shake-constant--hover"/><br/>
 <button> <a href="/App" style={{textDecoration:"none"}}> Start Here</a></button>

    </div> 
        );
    }
}
export default Home
 
