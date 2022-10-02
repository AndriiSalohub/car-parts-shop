export interface PartsItemProps {
    id: number
    title: string
    price: number
    discount: boolean
    discountPrice: number
    productCode: string
    image: string
    manufacturer: string
    docId: string
}

export interface PartsOutputProps {
    array: Array<{
        id: number
        title: string
        price: number
        discount: boolean
        discountPrice: number
        productCode: string
        manufacturer: string
        image: string
        popularity: number
        averageRating: number
        docId: string
    }>
}
