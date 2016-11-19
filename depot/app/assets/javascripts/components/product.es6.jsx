class Product extends React.Component {
  render () {
    return (
      <div>
        <div>Title: {this.props.title}</div>
        <div>Description: {this.props.description}</div>
        <div>Image Url: {this.props.imageUrl}</div>
        <div>Price: {this.props.price}</div>
      </div>
    );
  }
}

Product.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  imageUrl: React.PropTypes.string,
  price: React.PropTypes.number
};
