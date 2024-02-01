import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'

// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://vinayaksingh.in" className="logo">
        <span>Kennedy</span>
        <span>Bernard</span>
      </a>
      <div>
        <p>
          Contact directly via phone (+254115506555)
          
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/kennedy-bernard-195a80238/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/kennedy-ben"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        
     
      </div>
    </Container>
  )
}
