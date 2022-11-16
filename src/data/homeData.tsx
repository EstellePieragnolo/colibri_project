import { TVolumeInfo } from "../types";

const homeData = async (category: string) => {
  const apiKey = import.meta.env.VITE_API_KEY
  const data: TVolumeInfo[] = []
  const baseUrl = `https://books.googleapis.com/books/v1/volumes?q=${category}&maxResults=20&orderBy=newest&key=${apiKey}`

  try {
    const response = await fetch(`${baseUrl}`, {
      method: 'GET'
    });
    try {
      if (!response.ok) {
        const error = response.status;
        throw new Error(error.toString());
      }
      const apiResult = await response.json();
      if (apiResult && apiResult?.items?.length) {
        apiResult.items.forEach((item: { volumeInfo: TVolumeInfo }) => {
          const info = item.volumeInfo
          data.push({
            authors: info.authors,
            categories: info.categories,
            description: info.description,
            imageLinks: info.imageLinks,
            industryIdentifiers: info.industryIdentifiers,
            language: info.language,
            pageCount: info.pageCount,
            previewLink: info.previewLink,
            publishedDate: info.publishedDate,
            publisher: info.publisher,
            title: info.title,
          })
        })
      }
      return data
    }
    catch (error) {
      console.log(`error parsing data ${error}`)
      return null
    }
  }
  catch (error) {
    console.log(`error fetching data ${error}`)
    return null
  }
}

export default homeData;