import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CheckOutPage extends Component {
    state = {}

    handleSubmit = () => {


    }

    render() {
        return (<div className="container">
            <div className="col-lg-6 m-auto" >

                <form className="m-5 p-3 border" onSubmit={this.handleSubmit}>
                    <legend className="text-center">Payment Info</legend>

                    <div className="form-group">
                        <label for="inputAddress">Credit / Debit Card Number</label>
                        <input type="text" className="form-control" name="cardnumber" placeholder="XXXX-XXXX-XXXX-XXXX" required />
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label for="inputCity">MM</label>
                            <input type="text" className="form-control" name="mm" placeholder="MM" required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputState">YYYY</label>
                            <input type="text" className="form-control" name="yyyy" placeholder="YYYY" required />
                        </div>
                        <div className="form-group col-md-3">
                            <label for="inputZip">CVV</label>
                            <input type="text" className="form-control" name="cvv" placeholder="CVV" required />
                        </div>
                    </div>
                <Link to="/paymentauthentication">
                    <button type="submit"
                        style={{ height: "50px" }}
                        className="btn btn-success w-100  mb-2">Pay Using Card</button></Link>
                    <br />
                    <h5 className="text-center"> OR </h5>

                    <Link to="/success">
                        <button type="button"
                            style={{ height: "50px" }}
                            className="btn btn-info w-100  ">Pay Using Cash on Delivery</button>
                    </Link>
                    <br />
                </form>

            </div>
        </div>);
    }
}

export default CheckOutPage;