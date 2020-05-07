import React, { Component } from "react";
import im1 from '.Images/image1.jpg'
import im2 from '.Images/image2.jpg'
import im3 from '.Images/image3.jpg'
import im4 from '.Images/image4.jpg'
import im5 from '.Images/image5.jpg'


class MyOrders extends Component {
  state = {

  

    myorders: [
      {
        image:<img src={im1}/>,
        BookName: "Full Stack Developer",
        
        price: 1600
        
      },
      {
        image:<img src={im2}/>,
        BookName: "ReactJs",
        
        price: 2300
        
      },
      
      {
        image:<img src={im3}/>,
        BookName: "NodeJs",
    
      
        price: 20000
     
    
      },
      {
        image: <img src={im4}/>,
        BookName: "Modern JavaScript",
      
        price: 10000
    
        
        
      },
      {
        image:<img src={im5}/>,
        BookName: "HTML,CSS,RWD",
        
        price: 6000
       
        
      },
     
      {
        image: <img src={im6}/>,
        BookName: "Mongo DB",
        price: 600
      
      }
    ]
  };
  render() {
    if (this.state.myorders.length == 0) {
      return <p className="alert alert-danger">Stock unavailable</p>;
    }
    return (
      <div>
        <h1>My Orders</h1>
        <span className="m-2 p-2 badge badge-primary">
          {this.state.myorders.length}
        </span>
        <table className="table">
          <thead>
            <tr>
              <th>image</th>
              <th>BookName</th>
              <th>price</th>
              
            </tr>
          </thead>
          <tbody>
            {this.state.myorders.map(mvs => (
              <tr>
                <td>{mvs.image}</td>
                <td>{mvs.BookName}</td>
                
                <td>{mvs.price}</td>
                
              
               
                <td>
                  
                </td>
                <td>
                  

                </td>
            
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
 
 /* AddtoCart = mv => {
    const wishlist = this.state.wishlist.filter(mvs => mv.id !== mvs.id);
    this.setState({ wishlist: wishlist });
  };
  remove = mv => {
    const shoppingcart = this.state.shoppingcart.filter(mvs => mv.id !== mvs.id);
    this.setState({ shopingcart: shoppingcart });
  };*/
}
export default MyOrders;

