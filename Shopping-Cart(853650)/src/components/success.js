import React from 'react';
import axios from 'axios';
class PaymentSuccessPage extends React.Component {
    state = {
    
   orderID:Math.floor(Math.random() * 1000000),
   timeOfOrder:new Date()
        
    }
    componentDidMount=async()=>{
        var transactionDetails=this.state;
        await axios.post("/transaction",{transactionDetails}).then((res,err)=>{
            if(err)
            console.log(err)
            else
            console.log(res)
        })
    }
   
    render() {
       var date=new Date();
        date.setDate(date.getDate() + Math.floor(Math.random() * 7));
    
        

        return (<div class="container-fluid">
            <div className="col-lg-8 m-auto text-center">

                <div className="jumbotron mt-5 bg-success text-light">
                    <legend style={{ textAlign: "center", fontSize: "50px" }}>Your Payment was Successful</legend>
                </div>
                <h4>Your ORDERID: {this.state.orderID}</h4>
                <h4>Your Order will be delivered by {date.toDateString()}</h4>
                <img style={{ height: "300px", width: "30%" }} src="https://getdrawings.com/free-icon/delivery-icon-62.png" />

            
</div>
        </div>);
    }
}

export default PaymentSuccessPage;