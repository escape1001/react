import React from "react";
import "./Detail.css";
import {Link} from "react-router-dom";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;


class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        console.log("location : "+location.state);
        if(location.state === undefined){
            history.push("/");
        }

        jQuery("body").css({"overflow":"hidden"});
    }

    render(){
        const {location} = this.props;                
        return (
            <>
                <p className="back">
                    <Link to="/"></Link>
                </p>
                <div className="detail">
                    <h2>{location.state.title}</h2>
                    <p><img src={location.state.poster} alt={location.state.title}/></p>
                    <p>{location.state.summary}</p>
                </div>
            </>            
        );
    }

    componentWillUnmount(){
        jQuery("body").css({"overflow":"auto"});
    }

}

export default Detail;