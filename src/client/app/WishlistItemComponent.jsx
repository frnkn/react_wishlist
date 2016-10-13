import React from 'react';

class WishlistItemComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

          <tr>
            <td>{this.props.name}</td>
            <td>{this.props.price}</td>
            <td><a className="button button-primary" href="{this.props.url}">Anchor button</a></td>
          </tr>

    );
  }
}

export default WishlistItemComponent;
