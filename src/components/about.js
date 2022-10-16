import React from 'react';

class About extends React.Component{

    next = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e) =>{
        e.preventDefault();
        this.props.prevStep();


    };
    render(){
        const {handleChange,btcourse,cgpa,pgcourse,country} =this.props;
        return(
            <>
            <div className="row">
            <form className="col s14">
                <div className="row">
                <h2>Enter your personal info</h2>
                    <div className="input-field col s5">
                        <input id="btcourse" type="text" className="validate" 
                            onChange={handleChange('btcourse')}
                            value = {btcourse}
                        />
                        
                        <label htmlFor="btcourse" className='active'>B.tech Course</label>
                    </div>
                    <div className="input-field col s5">
                        <input id="cgpa" type="text" className="validate" 
                            onChange={handleChange('cgpa')}
                            value = {cgpa}
                        />
                        <label htmlFor="cgpa" className='active'>CGPA</label>
                    </div>
                    <div className="input-field col s5">
                        <input id="pgcourse" type="text" className="validate" 
                            onChange={handleChange('pgcourse')}
                            value = {pgcourse}
                        />
                        <label htmlFor="pgcourse" className='active'>P.G course</label>
                    </div>
                    <div className="input-field col s5">
                        <input id="country" type="text" className="validate" 
                            onChange={handleChange('country')}
                            value = {country}
                        />
                        <label htmlFor="country" className='active'>Country</label>
                    </div>
                </div>   
            
            </form>
            </div>
            <button className="btn waves-effect waves-light blue" type="submit" name="action"
                onClick={this.back}>
                <i className="material-icons right">Previous</i>
            </button>
            <button className="btn waves-effect waves-light blue" type="submit" name="action"
                onClick={this.next}>
                <i className="material-icons right">Next</i>
            </button>
            </>

        )
    }
}

export default About;