interface ImageType {
    x1: string
}

interface DesktopType {
    desktop: ImageType
}

export interface DataType {
    id: number
    image: DesktopType
    in_stock: boolean
    is_new: boolean
    is_second_hand: boolean
    price: string
    title: string
}