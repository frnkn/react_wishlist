import React from 'react';
import WishlistItemComponent from './WishlistItemComponent.jsx';

class WishlistComponent extends React.Component {

  constructor(props) {
    super(props);
    this.data = {
      products: [
        {name: 'Jeans', price: 22.05, url: "http://www.soliver.de"},
        {name: 'T-Shirt', price: 39.95, url: "http://www.soliver.de"},
        {name: 'Shoe', price: 99.95, url :"http://www.soliver.de"}
      ]
    };
    this.state = {
      products: this.data.products
    }
    this.increaseWishlist = this.increaseWishlist.bind(this);
  };

  increaseWishlist() {
    console.log("Increas Wishlist");
    var dummyProduct = {
        name: 'Dummy Product', price: 22.05, url: "http://www.soliver.de"
    };
    console.log("DUMMY PRODUCT", dummyProduct);
    this.setState({products: dummyProduct});
  }


  getWishlistItems() {
    let all = []

    for (let product of this.state.products) {
      console.log("PRDUCT", product);
      all.push(
        <WishlistItemComponent name={product.name} price={product.price} url={product.url} />
      );
    }
    return all;
  }



  render() {
    return (
      <div>
        <button onClick={this.increaseWishlist()}>Add Dummy PRoduct</button>
        <table className="u-full-width">
          <thead>
            <tr>
              <th>
                Product Name
              </th>
              <th>
                Price
              </th>
              <th>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            { this.getWishlistItems() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default WishlistComponent;
