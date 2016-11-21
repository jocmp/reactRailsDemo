class Products extends React.Component {
    constructor(props) {
        super(props);
        this.props
        this.state = {
            products: []
        };
        this.fetchProducts = this.fetchProducts.bind(this);
        this.setState = this.setState.bind(this);
        this.setProducts = this.setProducts.bind(this);
    }

    componentWillMount() {
        this.fetchProducts();
        setInterval(this.fetchProducts, 1000);
    }

    fetchProducts() {
        $.getJSON(this.props.productsPath, (data) => this.setProducts(data.products))
        console.log('called');
    }

    setProducts(products) {
        this.setState({products: products})
        console.log(products);
    }

    render() {
        var createProduct = (product) => <Product product={product}/>
        return (
            <div>

                <h1>Products</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th colSpan="2">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map(createProduct)}
                    </tbody>
                </table>
                <br/>
            </div>
        );
    }
}

Products.propTypes = {
  productsPath: React.PropTypes.string
};
