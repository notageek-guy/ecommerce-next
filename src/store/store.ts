import { atom } from "jotai";


export const cartAtom = atom([]); // cartAtom is an atom that holds an array of products
export const cartCountAtom = atom((get) => get(cartAtom).length); // cartCountAtom is an atom that holds the length of the cartAtom array 
export const cartTotalAtom = atom((get) => get(cartAtom).reduce((acc, product:any ) => acc + product.price, 0)); // cartTotalAtom is an atom that holds the total price of the cartAtom array 
