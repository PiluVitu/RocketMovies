import { Container, Form, Background } from './styles.js'
import { Button } from '../../components/Button/index.jsx'
import { MdOutlineEmail, MdPersonOutline } from 'react-icons/md'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'
import { Input } from '../../components/Input/index.jsx'
import { TextLink } from '../../components/TextLink'
import backgroundImg from '../../assets/Background.png'
export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input type="text" placeholder="Nome" icon={MdPersonOutline} />
        <Input type="email" placeholder="E-mail" icon={MdOutlineEmail} />
        <Input type="password" placeholder="Senha" icon={BiLockAlt} />
        <Input
          type="password"
          placeholder="Confirme a Senha"
          icon={BiLockAlt}
        />

        <Button title="Entrar" type="button" />

        <TextLink
          to={'/login'}
          icon={AiOutlineArrowLeft}
          title="Voltar para o login"
        />
      </Form>
      <Background alt="Teatro" src={backgroundImg} />
    </Container>
  )
}
