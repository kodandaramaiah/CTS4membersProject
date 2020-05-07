import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const paymentmethods = () => {
   var mystyle={
        width:300
    };
  return (
     <div >
<div >
<div class="container" >


</div>
<div  className="mt-5 ml-3" style={mystyle}>
<ul className="list-group">
<h1 >Payment options</h1><br></br>   
<a
        className="list-group-item list-group-item-action active"
        id="list-home-list"
        data-toggle="list"
        href="/checkout"
        role="tab"
        aria-controls="home"
      >
    credit/debit card
      </a>


<br></br>

<a
        className="list-group-item list-group-item-action active"
        id="list-home-list"
        data-toggle="list"
        href="/paytm"
        role="tab"
        aria-controls="home"
      >
       paytm
      </a>
<br></br>

<a
        className="list-group-item list-group-item-action active"
        id="list-home-list"
        data-toggle="list"
        href="/phonepe"
        role="tab"
        aria-controls="home"
      >
phonepe
      </a>
<br></br>







</ul>
</div>
</div>
</div> 
    
  );
};

export default paymentmethods;