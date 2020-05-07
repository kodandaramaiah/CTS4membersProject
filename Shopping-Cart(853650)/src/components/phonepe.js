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
        }}src="https://www.searchpng.com/wp-content/uploads/2019/12/PhonePe-Logo-PNG-715x715.jpg"></img></center>
            <form className="m-5 p-3 border" onSubmit={this.handleSubmit}>
                <legend className="text-center">Payment Info</legend>

                <div className="form-group">
                    <label for="inputAddress">Phonepe wallet</label>
                    <input type="number" className="form-control" name="amount" placeholder="enter amount" required />
                </div>

                <Link to="/success">
                <button type="submit"
                    style={{ height: "50px" }}
                    className="btn btn-warning w-100  mb-2">Pay Using wallet</button></Link>
                <br /><br/>
                
                <Link to="/checkout">
                <button type="submit"
                    style={{ height: "50px" }}
                    className="btn btn-warning w-100  mb-2">Pay Using card</button></Link>
                <br />

            
            </form>

        </div>
    </div> );
    }
}
 
export default paytm;