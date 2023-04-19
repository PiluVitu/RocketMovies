import { Container, Movies } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { AiOutlinePlus } from 'react-icons/ai'
import { MovieCard } from '../../components/MovieCard'
import { Link } from 'react-router-dom'

export const text = {
  1: `
  Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o 'fantasma' é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. 
  O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As 'missões Lázaro' enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. 
  Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. 
  Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
  `,
  2: `
  Quando Tony Stark (Robert Downey Jr.) inicia um programa inativo de manutenção da paz, as coisas dão terrivelmente errado, forçando ele, Thor (Chris Hemsworth), o Incrível Hulk (Mark Ruffalo) e o resto dos Vingadores a se reunirem. 
  Enquanto o destino da Terra está em jogo, a equipe é submetida ao teste final enquanto lutam contra Ultron, um terror tecnológico determinado à extinção humana. 
  Ao longo do caminho, eles encontram dois recém-chegados misteriosos e poderosos, Pietro e Wanda Maximoff.
  `,
  3: `
  The Maze Runner is a 2014 American dystopian science fiction film directed by Wes Ball, in his directorial debut, based on James Dashner's 2009 novel of the same name. The film is the first installment in The Maze Runner film series and was produced by Ellen Goldsmith-Vein, Wyck Godfrey, Marty Bowen, and Lee Stollman with a screenplay by Noah Oppenheim, Grant Pierce Myers, and T.S. Nowlin. The film stars Dylan O'Brien, Kaya Scodelario, Aml Ameen, Thomas Brodie-Sangster, Ki Hong Lee, Will Poulter, and Patricia Clarkson. The story follows sixteen-year-old Thomas, portrayed by O'Brien, who awakens in a rusty elevator with no memory of who he is, only to learn that he has been delivered to the middle of an intricate maze, along with many other boys, who have been trying to find their way out of the ever-changing labyrinth – all while establishing a functioning society in what they call the Glade.

  Development of The Maze Runner began in January 2011 when Fox purchased the film rights to Dashner's novel with Gotham Group, Temple Hill Entertainment, TSG Entertainment as producers and Catherine Hardwicke intended to direct. In 2012, Ball was hired to direct the film adaptation after presenting a 3D computer-animated short film titled Ruin with a similar tone and was initially considered for a feature-length adaptation. Principal photography began in Baton Rouge, Louisiana on May 13, 2013, and officially concluded on July 12, 2013.
  
  The Maze Runner was released on September 19, 2014, in the United States by 20th Century Fox. The film received positive reviews, with praise for the performances and tone. Critics considered it to be better than most young adult book-to-film adaptations. The film was first at the box office in its opening weekend, grossing $32.5 million, making it the seventh-highest-grossing debut in September. The film earned over $348 million worldwide at the box office, against its budget of $34 million. A sequel, Maze Runner: The Scorch Trials, was released on September 18, 2015, in the United States. A third and final film, Maze Runner: The Death Cure, was released on January 26, 2018.
  `,
  4: `
  Blade Runner 2049 is a 2017 American epic neo-noir science fiction film directed by Denis Villeneuve and written by Hampton Fancher and Michael Green.[10] A sequel to the 1982 film Blade Runner, the film stars Ryan Gosling and Harrison Ford, with Ana de Armas, Sylvia Hoeks, Robin Wright, Mackenzie Davis, Dave Bautista, and Jared Leto in supporting roles. Ford and Edward James Olmos reprise their roles from the original film. Gosling plays K, a Nexus-9 replicant "blade runner" who uncovers a secret that threatens to destabilize society and the course of civilization.

Ideas for a Blade Runner sequel were first proposed in the 1990s, but licensing issues stalled their development. Andrew Kosove and Broderick Johnson obtained the film rights from Bud Yorkin. Ridley Scott stepped down as the film's initial director and worked as an executive producer, while Villeneuve was later appointed to direct. Blade Runner 2049 was financed through a partnership between Alcon Entertainment and Sony Pictures, as well as a Hungarian government-funded tax rebate. Warner Bros., on behalf of Alcon, distributed the film in North America, while Sony handled distribution in international markets. Principal photography took place mostly at two soundstages in Budapest over four months from July to November 2016.

Blade Runner 2049 premiered in Los Angeles on October 3, 2017, and was released in the United States in 2D, 3D, and IMAX on October 6, 2017. The film received acclaim from critics, who praised its performances, direction, cinematography, editing, musical score, production design, visual effects, and faithfulness to the original film. It was widely considered among the best films of 2017. However, it became a box-office bomb, grossing $267.5 million worldwide against a production budget between $150–185 million but became a modern cult classic.[11][9][12][13] Blade Runner 2049 was nominated for and won several accolades: at the 90th Academy Awards, the film won Best Cinematography and Best Visual Effects, and was nominated for Best Production Design, Best Sound Editing, and Best Sound Mixing. It also received eight nominations at the 71st British Academy Film Awards, including Best Director, and won Best Cinematography and Best Special Visual Effects. A sequel series, Blade Runner 2099, is in development at Amazon Studios, with Scott set to return as executive producer.

  `,
  5: `
    
  Tron: Legacy (stylized as TRON: Legacy) is a 2010 American science fiction action film directed by Joseph Kosinski (in his feature directorial debut) and written by Adam Horowitz and Edward Kitsis, from a story by Horowitz, Kitsis, Brian Klugman, and Lee Sternthal. It serves as a sequel to Tron (1982), whose director Steven Lisberger returned to produce. The cast includes Jeff Bridges and Bruce Boxleitner reprising their roles as Kevin Flynn and Alan Bradley, respectively, as well as Garrett Hedlund, Olivia Wilde, James Frain, Beau Garrett and Michael Sheen. The story follows Flynn's adult son Sam, who responds to a message from his long-lost father and is transported into a virtual reality called "the Grid", where Sam, his father, and the algorithm Quorra must stop the malevolent program Clu from invading the real world.

Interest in creating a sequel to Tron arose after the film garnered a cult following. After much speculation, Walt Disney Pictures began a concerted effort in 2005 to devise Tron: Legacy, with the hiring of Klugman and Sternthal as writers. Kosinski was recruited as director two years later. As he was not optimistic about Disney's Matrix-esque approach to the film, Kosinski filmed a high-concept, which he used to conceptualise the universe of Tron: Legacy and convince the studio to greenlight the film. Principal photography took place in Vancouver over 67 days, in and around the city's central business district. Most sequences were shot in 3D and ten companies were involved with the extensive visual effects work. Chroma keying and other techniques were used to allow more freedom in creating effects. Daft Punk composed the musical score, incorporating orchestral sounds with their trademark electronic music.[7]

Tron: Legacy premiered in Tokyo on November 30, 2010, and was theatrically released in the United States and Canada on December 17, 2010. Disney vigorously promoted the film across multiple media platforms, including merchandising, consumer products, theme parks and advertising. Upon its release, the film received mixed reviews from film critics, who praised the visual effects, production design and soundtrack, but criticized the character development, cast performance and story. The film grossed $400 million during its worldwide theatrical run against a $170 million production budget. The film was nominated for an Oscar for Best Sound Editing at the 83rd Academy Awards, but lost to Inception. Like its predecessor, Tron: Legacy has been described as a cult film.[8][9]

  `
}

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <header>
          <h2>Meus Filmes</h2>
          <Link to={'/new-film'}>
            <Button icon={AiOutlinePlus} title="Adicionar Filme" />
          </Link>
        </header>
        <Movies>
          <MovieCard to={'/preview'} title="Interestellar" text={text[1]} />
          <MovieCard
            to={'/preview-2'}
            title="Vingadores: A Era de Ultron"
            text={text[2]}
          />
          <MovieCard to={'/preview-3'} title="The Maze Runner" text={text[3]} />
          <MovieCard
            to={'/preview-4'}
            title="Blade Runner 2049"
            text={text[4]}
          />
          <MovieCard to={'/preview-5'} title="Tron: Legado" text={text[5]} />
        </Movies>
      </Container>
    </>
  )
}
