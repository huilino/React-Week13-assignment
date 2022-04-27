import React from 'react';

export default class LoginForm extends React.Component {
    render(){
        return (
            <div className ="container">
                <div>
                    <h3> Log In </h3>
                </div>
            <form>
                <div className="form-group row myusername">
                    <label className = "col-sm-2 col-form-label mylabel" for="username" >Username:</label>
                    <div className = "col-sm-10">
                        <input type="text" className="form-control" placeholder="Username"/> 
                    </div>
                </div>
                <div className="form-group row mypassword">
                    <label className = "col-sm-2 col-form-label mylabel" for="password">Password:</label>
                    <div className = "col-sm-10">
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-6">
                        <input type ="checkbox"/>
                        <label className = "form-check-label px-2"> Remember me </label>
                    </div>
                </div>
                <div className ="form-group row">
                    <div className="col-sm-5">
                        <button type="submit" className="btn btn-default mybutton">Submit</button>
                    </div>
                </div> 
            </form>
            </div>
       
        );
    }
}
    
  


