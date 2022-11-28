import { addToWishlist } from "./WishlistSlice";
import { expect, it } from "vitest";
import {store} from "../../redux/store";

it("Adds a new book", () => {
  let state = store.getState().wishlist;
  const initialWishlist = state.wishlist.length;
  store.dispatch(addToWishlist("1"));
  state = store.getState().wishlist;
  const newlyAddedBook = state.wishlist.find((wishlistId) => { return wishlistId.id === "1"});
  expect(newlyAddedBook?.id).toBe("1");
  expect(state.wishlist.length).toBeGreaterThan(initialWishlist);
});
