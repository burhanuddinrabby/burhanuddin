import { Container } from './styles'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react';
import Resume from '../../assets/Burhan_Uddin.pdf'
export function Header(this: any) {
  const [isActive, setActive] = useState(false);

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      <>
        <HashLink smooth to="/" className="logo">
          <span>Burhan </span>
          <span>Uddin</span>
        </HashLink>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="/" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about-me" onClick={closeMenu}>
            About Me
          </NavHashLink>
          <NavHashLink smooth to="#portfolio" onClick={closeMenu}>
            Portfolio
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <NavHashLink smooth to="/blogs" onClick={closeMenu}>
            Blogs
          </NavHashLink>
          <a href={Resume} download className="button">
            Resume
          </a>
        </nav>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </>
    </Container>
  )
}
