import styled from "styled-components"
import BookSelection from "./BookSelection"

const StyledBookSelection = styled(BookSelection)`
  height: 270px;
  text-align: center;
  img {
    height: 150px;
    margin: 0 auto;
    &:hover{
        filter: opacity(0.8);
    }
  }
  h3 {
    font-size: 16px;
  }
  p {
    font-size: 12px;
  }
`
export default StyledBookSelection
