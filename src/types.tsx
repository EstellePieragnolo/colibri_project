export type TVolumeInfo = {
  authors: [string]
  categories: [string]
  description: string
  id: string
  imageLinks: TImageLinks
  industryIdentifiers: [{
    type: string,
    identifier: string
  }]
  language: string
  pageCount: number
  previewLink: string
  publishedDate: string
  publisher: string
  title: string
}
export type TImageLinks = {
  smallThumbnail: string
  thumbnail: string
}