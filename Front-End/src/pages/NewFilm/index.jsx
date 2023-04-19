import { TextLink } from '../../components/TextLink'
import { Container, Primary, Tags } from './styles'
import { TagItem } from '../../components/TagItem'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { FiArrowLeft } from 'react-icons/fi'

export function NewFilm() {
  return (
    <>
      <Header />
      <Container>
        <header>
          <TextLink to={'/'} icon={FiArrowLeft} title="Voltar" />
          <h2>Novo filme</h2>
        </header>
        <Primary>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </Primary>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Observações"
        ></textarea>
        <Tags>
          <h3>Marcadores</h3>
          <section>
            <TagItem value='Best Seller'/>
            <TagItem placeholder="Novo marcador" isNew />
          </section>
        </Tags>
        <footer>
          <Button title="Excluir Filme" />
          <Button title="Salvar alterações" />
        </footer>
      </Container>
    </>
  )
}
