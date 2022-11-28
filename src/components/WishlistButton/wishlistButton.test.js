import { useDispatch } from "react-redux";
import { expect, it } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a string number value to a number of type number", () => {
  const input = "1";
  const result = transformToNumber(input);
  expect(result).toBeTypeOf("number");
});

it("should add book id into wishlist", () => {
  const bookId = "123";
  const dispatch = useDispatch();
  const result = dispatch(toggleWishlist(bookId));
  expect(result).toBe(toggleWishlist.includes(bookId));
});
