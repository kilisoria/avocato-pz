import { useRouter } from 'next/router';

const ProductDetail = () => {
    const router = useRouter();

    return (
        <>
            <h1>This is the page for the external product!</h1>
            <h4>Router param is: {router.query.slug}</h4>
            </>
    )
}

export default ProductDetail;