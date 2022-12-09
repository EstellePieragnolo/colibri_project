import { createContext } from "react";

type TWishlistContext = {
  wishlist?: () => string[]
  toggleWishlistItem?: (id: string) => void
}

export const WishlistContext = createContext<TWishlistContext>({})
