import { Container, Brand, Profile } from './styles'
import { Link } from 'react-router-dom'
import { Input } from '../Input'
import { TextLink } from '../TextLink'

export function Header() {
  return (
    <Container>
      <Link to="/">
        <Brand>RocketMovies</Brand>
      </Link>
      <Input placeholder="Pesquisar pelo titulo" />
      <Profile>
        <section>
          <Link to="/profile">
            <h3>Paulo Victor Torres Silva</h3>
          </Link>
          <TextLink title="Sair" to={'login'} />
        </section>
        <img src="https://github.com/PiluVitu.png" alt="Profile Picture" />
      </Profile>
    </Container>
  )
}
