import {
  Container,
  Tags,
  TitleAndRate,
  Details,
  Description,
  Rate,
  User,
  Time
} from './styles'
import { AiOutlineStar, AiFillStar, AiOutlineArrowLeft } from 'react-icons/ai'
import { HiOutlineClock } from 'react-icons/hi'
import { Header } from '../../components/Header'
import { TextLink } from '../../components/TextLink'
import { Tag } from '../../components/Tag'

export function Preview() {
  return (
    <>
      <Header />
      <Container>
        <header>
          <TextLink to={'/'} icon={AiOutlineArrowLeft} title="Voltar" />
          <TitleAndRate>
            <h2>Interestellar</h2>
            <Rate>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </Rate>
          </TitleAndRate>
          <Details>
            <User>
              <img src="https://github.com/PiluVitu.png" alt="Profile Image" />
              <span>Por Paulo Victor Torres Silva </span>
            </User>
            <Time>
              <HiOutlineClock />
              <span>23/05/22 às 08:00</span>
            </Time>
          </Details>
        </header>
        <Tags>
          <Tag title="Ficção Cientifica" />
          <Tag title="Novo" />
          <Tag title="Best-Seller" />
          <Tag title="Favoritos da Vida" />
        </Tags>
        <Description>
          Pragas nas colheitas fizeram a civilização humana regredir para uma
          sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
          NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
          Cooper, acredita que seu quarto está assombrado por um fantasma que
          tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é
          uma inteligência desconhecida que está enviando mensagens codificadas
          através de radiação gravitacional, deixando coordenadas em binário que
          os levam até uma instalação secreta da NASA liderada pelo professor
          John Brand. O cientista revela que um buraco de minhoca foi aberto
          perto de Saturno e que ele leva a planetas que podem oferecer
          condições de sobrevivência para a espécie humana. As "missões Lázaro"
          enviadas anos antes identificaram três planetas potencialmente
          habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann
          – nomeados em homenagem aos astronautas que os pesquisaram. Brand
          recruta Cooper para pilotar a nave espacial Endurance e recuperar os
          dados dos astronautas; se um dos planetas se mostrar habitável, a
          humanidade irá seguir para ele na instalação da NASA, que é na
          realidade uma enorme estação espacial. A partida de Cooper devasta
          Murphy. Além de Cooper, a tripulação da Endurance é formada pela
          bióloga Amelia, filha de Brand; o cientista Romilly, o físico
          planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de
          minhoca e se dirigem a Miller, porém descobrem que o planeta possui
          enorme dilatação gravitacional temporal por estar tão perto de
          Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles
          entram em Miller e descobrem que é inóspito já que é coberto por um
          oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação
          enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e
          atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia
          descobrem que 23 anos se passaram. In 2067, a global famine caused
          humanity to abandon scientific pursuits such as space exploration.
          Ex-NASA pilot Joseph Cooper is forced to work as a farmer. One day,
          Cooper experiences a gravitational "anomaly" in his daughter Murph's
          bedroom. He deduces it to be a pattern of GPS coordinates and arrives
          at a secret NASA facility headed by Professor Brand. Brand explains to
          Cooper that it is engaged in a secret mission to discover an exoplanet
          capable of supporting life and that he is working on a
          gravity-equation. He enlists Cooper's help to pilot an exploratory
          spacecraft with three other scientists – Romilly, Doyle, and Brand’s
          daughter Amelia. The crew travels through a wormhole on board the
          Endurance to pass through to another galaxy. Their mission is to
          investigate three planets, orbiting a supermassive black hole called
          Gargantua, each of which was previously explored by a NASA
          scientist-explorer. The first planet is an aqua planet. The NASA
          explorer there is found dead, and one of their crew – Doyle – drowns
          after being caught in a massive tidal wave. The same tide also causes
          the probe's engines to be filled with water, forcing Cooper and Amelia
          to wait for them to dry out. They return to the Endurance in an hour,
          finding that 23 years have passed aboard due to the time dilation
          caused by the planet's proximity to Gargantua. In those 23 years,
          Murph has become a scientist, and begun working with Brand at NASA.
          She learns from a dying Professor Brand that he had given up on
          solving his gravity-equation, knowing that information is needed from
          inside a black hole. Instead, he put their mission's hopes on Cooper's
          team establishing a space colony using pre-fertilized eggs on a new
          habitable planet. At the second planet, the crew find its explorer,
          Mann, to be alive and awaken him from cryostasis. He eventually
          reveals to Cooper that he lied about the planet's habitability in the
          hope that NASA sent a mission to rescue him. Romilly dies in an
          explosion when he attempts to access the system's logs, while Mann
          tries to kill Cooper and hijack the Endurance spacecraft. Mann is
          killed when his craft fails to dock properly, and Cooper regains
          command of the Endurance. Cooper realizes that the Endurance only has
          enough resources for one person to safely complete their mission. He
          initiates a slingshot move around Gargantua, setting it to use gravity
          and be propelled to the final planet. At the last minute, he
          sacrifices himself by detaching from the spaceship and falling into
          the black hole, so that Amelia might safely complete the mission.
          Cooper survives and finds himself inside a five-dimensional tesseract,
          out of view from beyond the event horizon. From inside he can see
          moments in time from inside Murph's childhood bedroom. He finds her
          returning to look for clues to the gravity-equation, and he contacts
          her by manipulating items in the room with gravity to communicate
          through Morse code. Deducing that this construct has been created by
          future humans with the ability to time-travel, Cooper imparts to her
          the information she needs. With his mission completed, he is ejected
          by the future beings, who return him to the Solar System. He is
          reunited with a now elderly Murph, who he learns has used the
          gravity-equation to lead humanity's exodus from Earth. She advises him
          to seek out Amelia, and he sets off. Meanwhile, on the mission's final
          planet, Amelia is setting up a new colony for future humans to
          inhabit. She removes her helmet and breathes in the air, showing that
          the planet is capable of supporting human life.
        </Description>
      </Container>
    </>
  )
}
