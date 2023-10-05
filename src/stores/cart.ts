// import { defineStore } from "pinia";
// import { products, type Product } from "@/data/product";
// import { CART_STORAGE } from "@/composables/usePersistCart";
// import { ref } from "vue";

// export interface Purchase {
//     productId: number
//     quantity: number
//   }
  
//   interface CartState {
//     contents: Record<string, Purchase>
//   }
  
//   export interface CartPreview {
//     id: number
//     image: string
//     title: string
//     quantity: number
//     cost: number
//   }

//   export const useCartStore = defineStore({
//     id: 'cart',

//     state: ():CartState => ({
//         contents:JSON.parse(localStorage.getItem(CART_STORAGE) as string) ?? {},
//     }),

//     getters: {
//         count(): number{
//             return Object.keys(this.contents).reduce((acc,id)=>{
//                 return acc+ this.contents[id].quantity
//             },0)
//         },

//         total(): number {
//             const datas = ref<Product[]>(products)
//             return Object.keys(this.contents).reduce((acc,id)=>{
//                 return acc + datas.items[id].price * this.contents[id].quantity
//             },0)
//         }
//     }
//   })