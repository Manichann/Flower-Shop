import { useCartStore } from "@/stores/cart";
import {onUnmounted} from 'vue'

export const CART_STORAGE = 'CART_STORAGE'

export function usePersistCart() {
    const cartStore = useCartStore()

    const unsub = cartStore.$subscribe(()=> {
        localStorage.setItem(CART_STORAGE, JSON.stringify(cartStore.contents))
    })

    onUnmounted(() =>{
        unsub()
    })
}