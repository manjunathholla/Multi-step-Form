import React from "react";

class Yourinfo extends React.Component{

    back = (e) =>{
        e.preventDefault();
        this.props.prevStep();
    };

    render(){
        const {firstName,lastName,btcourse,cgpa,pgcourse,country} =this.props;
        
        return(
            <>
                <h2>This is the info you have entered</h2>
                <div className="info" style = {{padding:'3rem',

                    fontWeight: 'bolder',
                    lineHeight: '4rem',
                    fontSize: '30px'
                     }}>
                    Firstname: {firstName} <br />
                    Lastname: {lastName} <br />
                    B.tech : {btcourse} <br />
                    Cgpa : {cgpa} <br />
                    P.g course : {pgcourse} <br />
                    Country : {country} <br />
                </div>
                <button className="btn waves-effect waves-light blue" type="submit" name="action"
                onClick={this.back}>
                <i className="material-icons right">Previous</i>
            </button>
            </>
        )


    }

}
export default Yourinfo;
