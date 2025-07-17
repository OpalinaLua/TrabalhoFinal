
export const Carrinho = () => {
    const onAddProduct = Product => {
        if (allProducts.find (item.id === Product.id)){
            const products = allProducts.map (item => item.id === Product.id ? {...item,quantity: item.quantity + 1} : item 
    
            );
            setTotal(total === Product.price * Product.quantity);
            setCountProducts(countProducts + Product.quantity);
            return
            setAllProducts([...products]);
        }
        setTotal(total + Product.price * Product.quantity);
        setCountProducts(countProducts + Product.quantity);
        setAllProducts([...allProducts, Product]);

   
        };
        /*
        const {active, setActive} = useState{false}
        */ 

        const onDeleteProduct = product => {
            const results = allProducts.filter(
            item => item.id !== product.id
            );

            setTotal(total - product.price * product.quantity );
            setCountProducts(countProducts - product.quantity);
            setAllProducts(results);

        };
        
        const onCleaanCart = ()=> {
            setAllProducts([]);
            setTotal(0);
            setCountProducts(0);

        };





    };




