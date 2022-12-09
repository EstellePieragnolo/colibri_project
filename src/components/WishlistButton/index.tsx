import { TBookId } from "../../types";
import { useContext } from "react";
import { WishlistContext } from "../../contexts/wishlistContext";
import styled from "styled-components";

/**
 * Give a heart shape button to add a book to the wishlist
 */

const WishlistButton = ({ id }: TBookId) => {
  const { toggleWishlistItem, wishlist } = useContext(WishlistContext);
  const isInWishlist = wishlist && wishlist().some(item => item === id)

  return (
    <Section onClick={() => toggleWishlistItem && toggleWishlistItem(id)}>
      <SVG width="24" height="24" fillRule="evenodd" clipRule="evenodd" fill={isInWishlist && isInWishlist ? "#213547" : "none"} stroke={"#213547"}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </SVG>
    </Section>
  );
};

export default WishlistButton;

const Section = styled.div`
  cursor: pointer;
`
const SVG = styled.svg`
  &:hover{
    opacity: 0.5
  }
`