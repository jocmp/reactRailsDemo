class Product extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.product.title}</td>
        <td>{this.props.product.description}</td>
        <td>{this.props.product.price}</td>
        <td><a href={this.props.product.links.self}>More</a></td>
      </tr>
    );
  }
}

Product.propTypes = {
  product: React.PropTypes.object
};
