import {ProductsContext} from "../../contexts/products.context";
import {useContext} from "react";

const Shop = () => {
    const {products} = useContext(ProductsContext);
    return (
        <div>
            {products.map(({id,name}) => {
                return <div key={id}>{name}</div>
            })}
        </div>
    );
}

export default Shop;
