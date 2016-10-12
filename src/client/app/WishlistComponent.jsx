import React from 'react';
import WishlistItemComponent from './WishlistItemComponent.jsx';

class WishlistComponent extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <h1>Hello Wishlist Component</h1>
        <WishlistItemComponent />
      </div>
    );
  }
}

export default WishlistComponent;
