import { Container } from './styles'
import { FiX, FiPlus } from 'react-icons/fi'

export function TagItem({ isNew, onClick, value, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus size={24}/> : <FiX size={24}/>}
      </button>
    </Container>
  )
}
