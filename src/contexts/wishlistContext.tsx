import { createContext } from "react";
import { TBookId } from "../types";

type TWishlistContext = {
  wishlist?: TBookId[]
  toggleWishlistItem?: (id: string) => void
}

export const WishlistContext = createContext<TWishlistContext>({})
