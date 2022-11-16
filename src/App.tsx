import styled from 'styled-components';
import BookSelection from './components/BookSelection';
import { TVolumeInfo } from './types';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { getBookSelection } from './components/BookSelection/BookSelectionSlice';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';

const App = () => {
  const dispatch = useAppDispatch()

  const initApp = useCallback(async () => {
    dispatch(getBookSelection())
  },
    [dispatch],
  )
  useEffect(() => {
    initApp()
  }, []);

  const { books } = useAppSelector(state => state.bookSelection)
  return (
    <Section className="App" >
      <AppTitle>Welcome to Colibri Project</AppTitle>
      <AppSubtitle>Our book selection</AppSubtitle>
      <CategoryTitle>{"Medieval"}</CategoryTitle>
      <BooksContainer>
        {books?.map((bookInfo: TVolumeInfo, i: Number) => {
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

const AppWrapper = () => (
  <Provider store={store} >
    <App />
  </Provider>
)

export default AppWrapper;

const Section = styled.div`
  text-align: center;
`
const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin: 0 auto 0;
  max-width: 1000px;
  padding-top:70px;
`
const AppTitle = styled.h1`
  margin-bottom: 40px;
`
const AppSubtitle = styled.h3`
  color: #074b86;
  font-size: 25px;
`
const CategoryTitle = styled.h4`
  text-transform: capitalize;
  margin-top: 70px;
  font-size: 18px;
  border: 1px solid #213547;
  padding: 25px 0;
  max-width: 1000px;
  margin: 70px auto 0;
`