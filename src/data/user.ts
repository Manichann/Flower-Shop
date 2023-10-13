export interface User {
    id: string
    username: string
    image: string
    email: string
    password: string
}

export const users: User[] = [
    {
        id: 'U001',
        username: 'Tanoy',
        image: '../cinnamon.jpg',
        email: 'manichanh@gmail.com',
        password: '2802'
    }
]