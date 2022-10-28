import { TVolumeInfo } from "../types"

const BookSelection = (book: TVolumeInfo & { className?: string }) => { //extend TVolume with className type
  const { previewLink, title, authors, imageLinks, className } = book

  return (
    <div className={className}>
      <a href={previewLink} target="_blank">
        <img src={imageLinks.thumbnail} alt="book_thumbnail" />

        <h4>{title}</h4>
        {authors &&
          <p>By {authors}</p>
        }

      </a>
    </div>
  )
}
export default BookSelection
