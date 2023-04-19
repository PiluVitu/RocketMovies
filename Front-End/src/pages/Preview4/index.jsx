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

export function Preview4() {
  return (
    <>
      <Header />
      <Container>
        <header>
          <TextLink to={'/'} icon={AiOutlineArrowLeft} title="Voltar" />
          <TitleAndRate>
            <h2>Blade Runner 2049</h2>
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
          Blade Runner 2049 é um filme de ficção científica neo-noir americano
          de 2017 dirigido por Denis Villeneuve e escrito por Hampton Fancher e
          Michael Green,[5] sendo a sequência de Blade Runner, de 1982. O longa
          é estrelado por Ryan Gosling e Harrison Ford, contando também com Ana
          de Armas, Sylvia Hoeks, Robin Wright, Mackenzie Davis, Carla Juri,
          Lennie James, Dave Bautista e Jared Leto em seu elenco. Decorridos
          trinta anos após o filme original, a trama acompanha os passos de K,
          um replicante (humano sintético criado por bioengenharia) que trabalha
          como blade runner (caçador de androides) para a polícia de Los
          Angeles. Após descobrir um inacreditável segredo com o potencial de
          mergulhar no caos o que resta da sociedade, o qual também mexe com sua
          razão de ser e existir, K recebe uma missão secreta que aparenta estar
          ligada a Rick Deckard, um antigo blade runner desaparecido há 30 anos.
          As filmagens do filme foram realizadas em sua maior parte na cidade de
          Budapeste, Hungria, entre julho e novembro de 2016. Sua première
          ocorreu em 3 de outubro de 2017 no Teatro Dolby, Los Angeles. Nos
          cinemas, o longa foi lançado oficialmente nos Estados Unidos em 6 de
          outubro de 2017, tanto no formato convencional, quanto em 3D e IMAX,
          com sua estreia no Brasil e em Portugal se dando um dia antes. Blade
          Runner 2049 foi aclamado pelos críticos, com alguns considerando-o
          como uma das melhores sequências cinematográficas já produzidas, além
          de ter sido amplamente elogiado por suas performances, direção,
          fotografia, efeitos visuais, trilha sonora e design de
          produção.[6][7][8][9] A grande aceitação gerou ao filme indicações em
          cinco categorias do Oscar 2018, das quais venceu em duas, e em oito do
          BAFTA 2018, das quais venceu igualmente em duas. Todavia, nas
          bilheterias, terminou por arrecadar apenas US$ 259,2 milhões
          mundialmente, um número bem inferior ao previsto pelos seus
          produtores.[4][10][11][12] Enredo Em 2049, os replicantes – seres
          humanos artificiais fabricados graças ao desenvolvimento da
          bioengenharia – foram integrados à sociedade para possibilitar a
          continuação da sobrevivência da espécie humana, sendo responsáveis por
          fazer todo o trabalho pesado e atuar em ambientes hostis. K (Ryan
          Gosling), um novo modelo criado para obedecer ordens, trabalha como
          blade runner para o Departamento de Polícia de Los Angeles, caçando e
          "aposentando" (matando) antigos modelos (rebeldes hostis a ordens) que
          ainda estão à solta. Sua vida pessoal resume-se a conversar com sua
          namorada virtual, Joi (Ana de Armas), fabricada pela Wallace
          Corporation. A investigação de K sobre um grupo de replicantes
          rebeldes o leva a uma fazenda de proteína, onde ele aposenta Sapper
          Morton (Dave Bautista) e encontra uma caixa enterrada que parece ser
          uma urna com restos humanos. Uma análise forense revela que trata-se
          dos restos mortais de uma replicante que morreu por complicações no
          parto após uma cesariana de emergência. Isto deixa K perturbado, já
          que a gravidez em replicantes era até então tida como impossível. A
          superior de K, a Tenente Joshi (Robin Wright), lhe dá então ordens
          para destruir todas as evidências relacionadas ao caso e aposentar a
          criança, acreditando que se outros replicantes souberem da
          possibilidade de engravidar, causarão uma guerra civil. Transtornado
          com tais ordens, K visita a sede da empresa de Niander Wallace (Jared
          Leto), a qual sucedeu a Corporação Tyrell na fabricação de
          replicantes, e descobre que os restos mortais são de Rachael (Sean
          Young), uma replicante experimental. No processo, ele descobre também
          que ela teve um romance com o ex-blade runner Rick Deckard (Harrison
          Ford). Enfurecido com o fato de ser incapaz de fazer seus replicantes
          se reproduzirem, Wallace, acreditando que com tal meio poderá aumentar
          a produção deles e sua exploração de novos planetas, ordena que a
          replicante Luv (Sylvia Hoeks) roube os restos mortais de Rachael de
          dentro do Departamento de Polícia e siga K enquanto ele investiga o
          paradeiro da criança. Retornando à fazenda de Sapper Morton, K
          encontra uma árvore cujo tronco está entalhado com uma data que é a
          mesma de uma memória de infância artificial que ele tem implantada:
          uma data encravada em um pequeno cavalo de madeira. Logo, K encontra
          este mesmo cavalo em um orfanato, o que sugere que suas memórias são
          reais, e não implantes artificiais. Joi insiste que isto prova que K é
          especial e uma verdadeira pessoa, passando a chamá-lo de "Joe".
          Enquanto vasculha registros de nascimento daquele ano, K descobre uma
          anomalia: dois gêmeos nasceram naquele dia e possuem DNA idêntico –
          algo impossível – exceto pelo cromossomo que determina o sexo; apenas
          o menino consta como vivo. K decide então procurar a Dra. Ana Stelline
          (Carla Juri), uma designer de memórias que lhe informa que é ilegal
          implantar memórias reais em replicantes, levando K a crer que ele é o
          filho de Rachael. Subsequentemente, após falhar num teste psicológico
          para replicantes, K é suspenso por Joshi, explicando que tal falha
          simplesmente ocorreu por ter cumprido sua ordem anterior. Joshi,
          deduzindo que K é a criança perdida e sabendo que ele será perseguido
          por ter falhado no teste, lhe dá 48 horas para desaparecer. K então
          transfere Joi para um dispositivo móvel – se este for danificado, Joi
          será perdida para sempre. Perseverante, K leva o cavalo de madeira
          para uma análise e descobre sinais de radiação. Estes sinais o levam
          às ruínas de Las Vegas, onde ele encontra Deckard, que revela que os
          registros de nascimento foram deliberadamente manipulados para ocultar
          a criança, e que ele teve de deixar o corpo de Rachael e a criança
          recém-nascida com os outros replicantes para protegê-la. Enquanto
          isso, Luv assassina Joshi e logo encontra K e Deckard, sequestrando
          este e deixando K à beira da morte, após destruir o dispositivo que
          continha Joi. Posteriormente, K é salvo por um grupo de replicantes
          que luta pela liberdade, e a líder Freysa (Hiam Abbass) lhe conta a
          história de Rachael, que morreu em seus braços após dar à luz a uma
          menina, e não um menino. Para impedir que Deckard dê a Wallace
          informações sobre o paradeiro da criança, Freysa pede que K mate o
          ex-blade runner para o bem maior de todos os replicantes. Logo depois,
          ao caminhar pela rua, K vê uma propaganda da acompanhante Joi, que
          chama qualquer um de "Joe" – isto reafirma o fato que ele não é
          especial. De volta a Los Angeles, Deckard é interrogado por Wallace,
          que sugere que ele também é um replicante, e que os sentimentos de
          Rachael por ele foram deliberadamente programados visando uma
          compatibilidade reprodutiva. Wallace oferece um clone de Rachael a
          Deckard caso ele colabore, mas o mesmo rejeita a oferta. Enquanto Luv
          transporta Deckard a uma colônia fora da Terra para torturá-lo, K os
          intercepta. Ele acaba por matar Luv e resgatar Deckard, enquanto que o
          veículo onde eles estavam é submerso pela água, fazendo com que
          Wallace pense que Deckard morreu afogado. K então leva Deckard para
          conhecer Ana Stelline, sua filha; ele entra no prédio cautelosamente e
          encontra Stelline, enquanto K deita na entrada do prédio e olha para o
          céu.[13]
        </Description>
      </Container>
    </>
  )
}
