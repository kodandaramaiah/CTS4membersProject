import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class paytm extends Component {
    state = {  }
    handleSubmit = () => {


    }
    render() { 
        return ( <div className="container">
        <div className="col-lg-6 m-auto" >
            <center><img style =
            {{ height: "300px", 
            width: "70%",
            paddingRight:"20px" 
        }}   
            src="https://pbs.twimg.com/profile_images/1242803598083395585/4cWZptzw_400x400.jpg"></img></center>
            <form className="m-5 p-3 border" onSubmit={this.handleSubmit}>
                <legend className="text-center">Payment Info</legend>

                <div className="form-group">
                    <label for="inputAddress">Paytm wallet</label>
                    <input type="number" className="form-control" name="amount" placeholder="enter amount" required />
                </div>

                <Link to="/success">
                <button type="submit"
                    style={{ height: "50px" }}
                    className="btn btn-success w-100  mb-2">Pay Using wallet</button></Link>
                <br /><br/>
                
                <Link to="/checkout">
                <button type="submit"
                    style={{ height: "50px" }}
                    className="btn btn-success w-100  mb-2">Pay Using card</button></Link>
                <br />

            
            </form>

        </div>
    </div> );
    }
}
 
export default paytm;