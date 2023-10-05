export interface Category {
    id: string
    name: string
    product: Partial<Product>[]
}

export interface Product {
    id: string
    name: string
    image: string
    category: Partial<Category>[]
    price: number
    discount?: number
}

export interface Inventory {
    id: string
    product: Partial<Product>
    qty: number
}

interface ProductState {
    items: Record<string, Product>
    ids: number[]
  }

export const categories: Category[] = [
    { id: "C01", name: "Daily", product: [{id: 'P001'},{id: 'P005'},{id: 'P008'}, {id: 'P010'}] },
    { id: "C02", name: "Events", product: [{id: 'P003'}, {id: 'P004'}, {id: 'P009'},{id: 'P011'}] },
    { id: "C03", name: "Wedding", product: [{id: 'P002'}, {id: 'P006'},{id: 'C007'}] },
]

export const inventories: Inventory[] = [
    
]

export const products: Product[] = [
    {
        id: 'P001',
        name: 'Autumn and Fall',
        image: 'https://aspicio.themeskingdom.com/wp-content/uploads/2022/03/Mask-Group-11-753x1024.jpg',
        category: [{id: 'C01'},{id: 'C02'}],
        price: 119000,
        discount: 0
    },
    {
        id: 'P002',
        name: 'Blush and Cream',
        image: 'https://aspicio.themeskingdom.com/wp-content/uploads/2022/03/Mask-Group-12-473x644.jpg',
        category: [{id: 'C03'},{id: 'C01'},{id:'C02'}],
        price: 129000,
        discount: 0
    },
    {
        id: 'P003',
        name: 'Brownie Mauve Tulip',
        image: 'https://aspicio.themeskingdom.com/wp-content/uploads/2022/03/Mask-Group-15-473x644.jpg',
        category: [{id: 'C01'},{id: 'C02'}],
        price: 89000,
        discount: 0
    },
    {
        id: 'P004',
        name: 'Herbaceous Peony',
        image: 'https://aspicio.themeskingdom.com/wp-content/uploads/2022/03/Mask-Group-16-473x644.jpg',
        category: [{id: 'C01'}],
        price: 129000,
        discount: 0
    },
    {
        id: 'P005',
        name: 'Purple Tulip Spring',
        image: 'https://aspicio.themeskingdom.com/wp-content/uploads/2022/03/Mask-Group-18-473x644.jpg',
        category: [{id: 'C01'}],
        price: 119000,
        discount: 0
    },
    {
        id: 'P006',
        name: 'Spring Snowflake',
        image: 'https://aspicio.themeskingdom.com/wp-content/uploads/2022/03/Group-78-753x1024.jpg',
        category: [{id: 'C01'}],
        price: 129000,
        discount: 0
    },
    {
        id: 'P007',
        name: 'Cloud Bouquet',
        image: 'https://aspicio.themeskingdom.com/wp-content/uploads/2022/03/Mask-Group-6-753x1024.jpg',
        category: [{id: 'C03'},{id:'C02'}],
        price: 109000,
        discount: 0
    },
    {
        id: 'P008',
        name: 'Garden',
        image: 'https://aspicio.themeskingdom.com/wp-content/uploads/2022/03/bouquet-753x1024.jpg',
        category: [{id: 'C03'},{id:'C02'}],
        price: 79000,
        discount: 0
    },
    {
        id: 'P009',
        name: 'White bridal bouquet',
        image: 'https://aspicio.themeskingdom.com/wp-content/uploads/2022/03/Mask-Group-7-753x1024.jpg',
        category: [{id: 'C02'},{id:'C03'}],
        price: 139000,
        discount: 0
    },
    {
        id: 'P010',
        name: 'Scarlet Sage',
        image: 'https://aspicio.themeskingdom.com/wp-content/uploads/2022/03/Mask-Group-2-753x1024.jpg',
        category: [{id: 'C03'}],
        price: 119000,
        discount: 0
    },
    {
        id: 'P011',
        name: 'Wild Rose',
        image: 'https://aspicio.themeskingdom.com/wp-content/uploads/2022/03/Mask-Group-17-473x644.jpg',
        category: [{id: 'C03'}],
        price: 119000,
        discount: 0
    },
]