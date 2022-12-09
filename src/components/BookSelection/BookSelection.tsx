import { useContext, useEffect, useState } from "react"
import { WishlistContext } from "../../contexts/wishlistContext"
import { TVolumeInfo } from "../../types"
import WishlistButton from "../WishlistButton"

/**
 * Give a book selection
 */
const BookSelection = (book: TVolumeInfo & { className?: string }) => { //extend TVolume with className type
  const { previewLink, title, authors, imageLinks, className, id } = book
  const { wishlist } = useContext(WishlistContext);

  const isInWishlist = wishlist && wishlist().some(item => item === id)

  return (
    <div className={className}>
      <a href={previewLink} target="_blank">
        <img src={imageLinks?.thumbnail} alt="book_thumbnail" />
        {title && <h4>{title}</h4>}
        {authors &&
          <p>By {authors}</p>
        }
      </a>
      <WishlistButton id={id} isActive={isInWishlist && isInWishlist ? "#213547" : "none"} />
    </div>
  )
}
export default BookSelection
