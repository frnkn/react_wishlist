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
  };

  getWishlistItems() {
    let all = []
    
    for (let product of this.data.products) {
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
