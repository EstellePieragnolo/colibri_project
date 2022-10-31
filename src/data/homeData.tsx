import { useEffect, useState } from "react";
import { TVolumeInfo } from "../types";

const homeData = (category: string) => {
  const [data, setData] = useState<TVolumeInfo[]>([]);
  const apiKey = import.meta.env.VITE_API_KEY

  useEffect(() => {
    const getData = async () => {
      const baseUrl = `https://books.googleapis.com/books/v1/volumes?q=${category}&maxResults=20&orderBy=newest&key=${apiKey}` // Put apiKey elsewhere
      try {
        const response = await fetch(`${baseUrl}`, {
          method: 'GET'
        });
        try {
          const data = await response.json();
          if (!response.ok) {
            const error = response.status;
            throw new Error(error.toString());
          }
          setData(data.items.map((item: { volumeInfo: TVolumeInfo }) => {
            const info = item.volumeInfo
            return ({
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
          }))
        }
        catch (error) {
          console.log(`error parsing data ${error}`)
        }
      }
      catch (error) {
        console.log(`error fetching data ${error}`)
      }

    }
    getData();
  }, [])
  return data
}

export default homeData;