import styled from 'styled-components'

const FragranceImage = styled.img.attrs(({ src }) => ({
  src: src.type,
}))`
  height: 75%;
  max-height: 250px;
  object-fit: contain;
`
export default FragranceImage
