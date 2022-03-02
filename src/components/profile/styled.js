import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

export const WrapperInfoUser = styled.div`
  display: flex;
  heigth: auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 8px;
  height: 200px;
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }
  h4 {
    font-size: 1rem;
    font-weight: bold;
  }
`

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  h3 {
    margin-right: 8px;
  }
  a {
    font-size: 1.2rem;
    color: blue;
    font-weight: bold;
  }
`

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`
