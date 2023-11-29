import { useRouter } from 'next/router';

const ProductDetail = () => {
    const router = useRouter();

    return (
        <>
            <h1>This is the page for the Product item!</h1>
            <h4>Router param is: {router.query.id}</h4>
            </>
    )
}

export default ProductDetail;