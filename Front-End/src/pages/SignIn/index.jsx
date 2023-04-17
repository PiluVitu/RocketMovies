import { Container, Form, Background } from './styles.js'
import { Button } from '../../components/Button/index.jsx'
import { MdOutlineEmail } from 'react-icons/md'
import { BiLockAlt } from 'react-icons/bi'
import { Input } from '../../components/Input/index.jsx'
import { TextArea } from '../../components/TextArea'
import backgroundImg from '../../assets/Background.png'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input type="email" placeholder="E-mail" icon={MdOutlineEmail} />
        <Input type="password" placeholder="Senha" icon={BiLockAlt} />

        <Button title="Entrar" type="button" />

        <TextArea to="/register" title="Criar conta" />
      </Form>
      <Background alt="Teatro" src={backgroundImg} />
    </Container>
  )
}
