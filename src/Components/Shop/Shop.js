import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Actions/CartAction';
import Product from '../Product/Product';


const Shop = (props) => {
  const {products, addToCart} = props;
    return (
        <div>
            <h4>this is Shop </h4>
            { 
             products.map(pd => <Product 
                product={pd}
                key={pd.id}
                addToCart={addToCart}
                />)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

//const connectToStore = connect(mapStateToProps, mapDispatchToProps);

//connect(mapStateToProps, mapDispatchToProps)(Shop)

export default connect(mapStateToProps, mapDispatchToProps)(Shop);