import {
    useDeleteProductMutation,
    useGetProductsQuery,
} from "../../services/productsApi";

const ProductView = () => {
    const { data, isLoading, isError } = useGetProductsQuery();
    console.log(data, isLoading, isError);

    const [deleteProduct] = useDeleteProductMutation();
    console.log(deleteProduct);
    const handleDelete = async (id) => {
        await deleteProduct(id);
    };
    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {!isLoading && !isError && data && data.length > 0 && (
                <section className="products">
                    {data.map((product) => {
                        return (
                            <article key={product.id}>
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                <button
                                    onClick={() => handleDelete(product.id)}
                                >
                                    Delete
                                </button>
                            </article>
                        );
                    })}
                </section>
            )}
        </div>
    );
};

export default ProductView;
