import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const baseUrl = 'https://books.googleapis.com/books/v1/volumes?q=gardening&maxResults=20&orderBy=newest&key=AIzaSyCCFMYb0rvuibTlkknulNp5nQygOs4JPi4'; // Put apiKey elsewhere
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
          setData(data.items.map(item => item.volumeInfo))
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
    <div className="App" >
    </div>
  );
}

export default App;
