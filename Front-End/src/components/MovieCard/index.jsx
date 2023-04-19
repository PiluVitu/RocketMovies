import { Container, Rating, Tags } from './styles'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { Tag } from '../Tag'

export function MovieCard({ title, text, titleTag, ...rest }) {
  return (
    <Container {...rest}>
      <h3>{title}</h3>
      <Rating>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </Rating>
      <p>{text}</p>
      <Tags>
        <Tag title="Ficção Cientifica" />
        <Tag title="Novo" />
        <Tag title="Best-Seller" />
        <Tag title="Favoritos Da Vida" />
      </Tags>
    </Container>
  )
}
