import React, { Component } from "react";
import im1 from '.Images/image1.jpg'
import im2 from '.Images/image2.jpg'
import im3 from '.Images/image3.jpg'
import im4 from '.Images/image4.jpg'
import im5 from '.Images/image5.jpg'
import im6 from '.Images/image6.jpg'


class Products extends Component {
  state = {
    count: 0,
    products: [
      {
        image:<img src={im1}/>,

        name: "Full Stack Developer",
        numberInStock: 6,
        price: 10000
      },
      {
        image:<img src={im2}/>,
        name: "ReactJS",
        numberInStock: 5,
        price: 5000
      },
      {
        image:<img src={im3}/>,
        name: "NodeJS",
        numberInStock: 8,
        price: 4000
      },
      {        
        image:<img src={im4}/>,


        name: "Modern JavaScript",
        numberInStock: 7,
        price: 3500
      },
      {
        image:<img src={im5}/>,

        name: "HTML,CSS,RWD",
        numberInStock: 7,
        price: 4000
      },
      {
        image:<img src={im6}/>,

        name: "MongoDB",
        numberInStock: 7,
        price: 3.5
      },
      
    ]
  };
  render() {
    if (this.state.products.length == 0) {
      return <p className="alert alert-danger">Stock unavailable</p>;
    }
    return (
      <div>
        <span className="m-2 p-2 badge badge-primary">
          {this.state.products.length}
        </span>
        <h2>MY WISHIST</h2>
        <table className="table">
          
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>NumberInStock</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map(pds => (
              <tr>
                <td>{pds.image}</td>
                <td>{pds.name}</td>
                <td>{pds.numberInStock}</td>
                <td>{pds.price}</td>
                <td>
                  
                  <button
                    onClick={() => this.addtocart(pds)}
                    className="btn btn-success btn-sm"
                  >
                    AddToCart
                  </button>
                  </td>
                  <td>
                  <button
                    onClick={() => this.remove(pds)}
                    className="btn btn-danger btn-sm"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  remove = pd => {
    const products = this.state.products.filter(pds => pd.id !== pds.id);
    this.setState({ products: products });
  };
  addtocart = pd => {
    const products = this.state.products.filter(pds => pd.id != pds.id);
    this.setState({ products: products });
  };
}
export default Products;

