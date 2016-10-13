import React from 'react';
import {render} from 'react-dom';
import WishlistComponent from './WishlistComponent.jsx';

class Wishlist extends React.Component {
  render () {
    return (
      <div>
        <p> Hello s.Oliver Wishlist 444!</p>
        <WishlistComponent/>

      </div>
    )
  }
}

render(<Wishlist/>, document.getElementById('wishlist'));
