import React from 'react';

class WishlistItemComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <td>123456</td>
            <td>Pullover</td>
            <td>25, 45 EUR</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>Hose</td>
            <td>25, 45 EUR</td>
          </tr>
          <tr>
            <td>123456</td>
            <td>Jeans</td>
            <td>25, 45 EUR</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default WishlistItemComponent;
