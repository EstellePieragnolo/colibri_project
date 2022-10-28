import { useEffect, useState } from 'react';
import styled from 'styled-components';
import BookSelection from './BookSelection';
import { TVolumeInfo } from './types';

const App = () => {
  const [data, setData] = useState<TVolumeInfo[]>([]);
  const apiKey = import.meta.env.VITE_API_KEY

  useEffect(() => {
    const getData = async () => {
      const baseUrl = `https://books.googleapis.com/books/v1/volumes?q=gardening&maxResults=20&orderBy=newest&key=${apiKey}` // Put apiKey elsewhere
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
            console.log(item.volumeInfo.authors)
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
  console.log({ data })
  return (
    <Section className="App" >
      <AppTitle>Welcome to Colibri Project</AppTitle>
      <AppSubtitle>Our book selection</AppSubtitle>
      <BooksContainer>
        {data?.map((bookInfo: TVolumeInfo, i: Number) => {
          return (
            <div key={`book-${i}`}>
              <BookSelection {...bookInfo} />
            </div>
          )
        })
        }
      </BooksContainer>
    </Section>
  );
}

export default App;
const Section = styled.div`
  text-align: center;
`
const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin: 150px auto 0;
  max-width: 1000px;
`
const AppTitle = styled.h1`
  margin-bottom: 40px;
`
const AppSubtitle = styled.h3`
  color: #074b86;
  font-size: 25px;
`