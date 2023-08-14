import ChangeProduct from '../Components/ChangeProduct/ChangeProduct'
import ProductPageItem from '../Components/ProductPageItem/ProductPageItem'
import Subheader from '../Components/Subheader/Subheader'
import UsefulInformation from '../Components/UsefulInformation/UsefulInformation'

const ProductPage = () => {
    return (
        <>
            <Subheader pageTitle="our products" />
            <main>
                <ChangeProduct />
                <ProductPageItem />
                <UsefulInformation />
            </main>
        </>
    )
}

export default ProductPage
