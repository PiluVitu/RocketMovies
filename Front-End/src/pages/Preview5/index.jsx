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

export function Preview5() {
  return (
    <>
      <Header />
      <Container>
        <header>
          <TextLink to={'/'} icon={AiOutlineArrowLeft} title="Voltar" />
          <TitleAndRate>
            <h2>Tron: Legado</h2>
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
          Tron (stylized as TRON) is a 1982 American science fiction
          action-adventure film written and directed by Steven Lisberger from a
          story by Lisberger and Bonnie MacBird. The film stars Jeff Bridges as
          Kevin Flynn, a computer programmer and video game developer who is
          transported inside the software world of a mainframe computer where he
          interacts with programs in his attempt to escape; it also stars Bruce
          Boxleitner, David Warner, Cindy Morgan, and Barnard Hughes. Tron,
          along with The Last Starfighter, has the distinction of being one of
          cinema's earliest films to use extensive computer-generated imagery
          (CGI). The inspiration for Tron dates back to 1976, when Lisberger
          became intrigued with video games after seeing Pong. He and producer
          Donald Kushner set up an animation studio to develop Tron with the
          intention of making it an animated film. To promote the studio itself,
          Lisberger and his team created a 30-second animation featuring the
          first appearance of the title character. Eventually, Lisberger decided
          to include live-action elements with both backlit and computer
          animation for the actual feature-length film. Various studios had
          rejected the storyboards for the film before Walt Disney Productions
          agreed to finance and distribute Tron. There, backlit animation was
          finally combined with the computer animation and live action. Tron was
          released on July 9, 1982. The film was a moderate success at the box
          office, and received positive reviews from critics, who praised its
          groundbreaking visuals and acting but criticized its storyline as
          being incoherent. Tron received nominations for Best Costume Design[2]
          and Best Sound[3] at the 55th Academy Awards, but was not nominated in
          the Best Visual Effects category.[4] Tron spawned multiple video games
          (including an arcade tie-in released shortly after the film), and as
          it became a cult film, a multimedia franchise including comic books. A
          sequel titled Tron: Legacy, directed by Joseph Kosinski, was released
          in 2010, with Bridges and Boxleitner reprising their roles and
          Lisberger acting as producer, which itself was followed by the XD
          animated series Tron: Uprising, set between the two films.[5] Plot
          Kevin Flynn is a leading software engineer, formerly employed by the
          computer corporation ENCOM, who now runs a video game arcade and
          attempts to hack into ENCOM's mainframe system. However, ENCOM's
          Master Control Program (MCP) halts his progress. Within ENCOM,
          programmer Alan Bradley and his girlfriend, engineer Lora Baines,
          discover that the MCP has closed off their access to projects. When
          Alan confronts the senior executive vice president, Ed Dillinger,
          Dillinger claims that the security measures are an effort to stop
          outside hacking attempts. However, when Dillinger privately questions
          the MCP through his computerized desk, he realizes the MCP has
          expanded into a powerful virtual intelligence and has become
          power-hungry, illegally appropriating personal, business, and
          government programs to increase its own capabilities. Dillinger rose
          to the top of ENCOM by stealing video games Flynn had created,
          presenting them to the company as his own. The MCP blackmails
          Dillinger with information about his plagiarizing Flynn's games if he
          does not comply with its directives. Lora deduces that Flynn is the
          hacker, and she and Alan go to his arcade to warn him. Flynn reveals
          that he has been trying to locate evidence proving Dillinger's
          plagiarism, which launched Dillinger's rise in the company. Together,
          the three form a plan to break into ENCOM and unlock Alan's "Tron"
          program, a self-governing security measure designed to protect the
          system and counter the functions of the MCP. Once inside ENCOM, the
          three split up and Flynn comes into direct conflict with the MCP,
          communicating with his terminal. Before Flynn can get the information
          he needs to reveal Dillinger's acts, the MCP uses an experimental
          laser to digitize and upload Flynn into the ENCOM mainframe
          cyberspace, where programs are living entities appearing in the
          likeness of the human "Users" (programmers) who created them. Flynn
          learns that the MCP and its second-in-command, Sark, rule and coerce
          programs to renounce their belief in the Users. The MCP forces
          programs that resist to play in deadly games and begins putting Flynn
          in duels. Flynn meets other captured programs, Ram and Tron, between
          matches. Partnered, the three escape into the mainframe during a light
          cycle match (an arcade game Flynn wrote the program for and is skilled
          at), but Flynn and Ram become separated from Tron by an MCP pursuit
          party. While attempting to help Ram, who was wounded in the pursuit,
          Flynn learns that he can manipulate portions of the mainframe by
          accessing his programmer knowledge. Ram recognizes Flynn as a User and
          encourages him to find Tron and free the system before "derezzing"
          (dying). Using his new ability, Flynn partially rebuilds a Recognizer
          vehicle (a construct taken from another one of Flynn's games) and
          later disguises himself as one of Sark's soldiers. Tron enlists help
          from Yori, a sympathetic program, and at an I/O tower receives
          information from Alan necessary to destroy the MCP. Flynn rejoins
          them, and the three board a hijacked solar sailer to reach the MCP's
          core. However, Sark's command ship destroys the sailer, capturing
          Flynn and Yori and presumably killing Tron. Sark leaves the command
          ship and orders its deresolution, but Flynn keeps it intact by again
          manipulating the mainframe, while Sark reaches the MCP's core on a
          shuttle carrying captured programs. While the MCP attempts to absorb
          captive programs, Tron, who turns out to have survived, confronts Sark
          and critically injures him, prompting the MCP to give him all its
          functions. Realizing that his ability to manipulate the mainframe
          might give Tron an opening, Flynn leaps into the beam of the MCP,
          distracting it. Seeing the break in the MCP's shield, Tron attacks
          through the gap and destroys the MCP and Sark, ending the MCP's
          control over the mainframe and allowing the captured programs to
          communicate with users again. Flynn reappears in the real world,
          rematerialized at his terminal. Tron's victory in the mainframe has
          released all lockouts on computer access, and a nearby printer
          produces the evidence that Dillinger had plagiarized Flynn's
          creations. The next morning, Dillinger enters his office to find the
          MCP deactivated and the proof of his theft publicized, but is
          nevertheless glad that the MCP is destroyed. Subsequently, Dillinger
          is terminated while Flynn is promoted to CEO of ENCOM, and is happily
          greeted by Alan and Lora as their new boss.
        </Description>
      </Container>
    </>
  )
}
