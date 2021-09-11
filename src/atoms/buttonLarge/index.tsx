import React from 'react'
import { Container, ImageAndText } from './styles'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

export default function ButtonLarge({ url, imgUrl, text }: any) {
  return (
    <Container href={url}>
      <ImageAndText>
        <img width="50px" height="50px" src={imgUrl} alt="Atila" />
        <p>{text}</p>
      </ImageAndText>
      <IoIosArrowDroprightCircle size="30px" />
    </Container>
  )
}