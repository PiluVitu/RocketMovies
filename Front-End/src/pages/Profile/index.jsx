import { Container, Form, ProfileImg, NameAndEmail, Password } from './styles'
import { MdOutlineEmail, MdPersonOutline } from 'react-icons/md'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'
import { FiCamera } from 'react-icons/fi'
import { TextLink } from '../../components/TextLink'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function Profile() {
  return (
    <Container>
      <section>
        <TextLink to={'/'} icon={AiOutlineArrowLeft} title="Voltar" />
      </section>
      <Form>
        <ProfileImg>
          <img src="https://github.com/PiluVitu.png" />
          <label htmlFor="file">
            <FiCamera />
            <input type="file" id="file" />
          </label>
        </ProfileImg>
        <NameAndEmail>
          <Input type="text" icon={MdPersonOutline} placeholder="Nome" />
          <Input type="email" icon={MdOutlineEmail} placeholder="Email" />
        </NameAndEmail>
        <Password>
          <Input type="password" icon={BiLockAlt} placeholder="Senha Atual" />
          <Input type="password" icon={BiLockAlt} placeholder="Nova Senha" />
        </Password>
        <Button type="button" title="Salvar" />
      </Form>
    </Container>
  )
}
