import { TVolumeInfo } from "../../types"
import WishlistButton from "../WishlistButton"

/**
 * Give a book selection
 */
const BookSelection = (book: TVolumeInfo & { className?: string }) => { //extend TVolume with className type
  const { previewLink, title, authors, imageLinks, className, id } = book

  return (
    <div className={className}>
      <a href={previewLink} target="_blank">
        <img src={imageLinks?.thumbnail} alt="book_thumbnail" />
        {title && <h4>{title}</h4>}
        {authors &&
          <p>By {authors}</p>
        }
      </a>
      <WishlistButton id={id} />
    </div>
  )
}
export default BookSelection
