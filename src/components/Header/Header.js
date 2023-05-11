import React from "react";
import { Wrapper, device } from "../../styles/variables";
import { Link } from "react-router-dom";
import * as S from "./Header.style";

const Header = () => {
  return (
    <>
      <S.Header>
        <Wrapper>
          <S.Container>
            <S.LogoLinkContainer>
              <Link to="/">movie</Link>
            </S.LogoLinkContainer>
            <S.UL>
              <S.LI>
                <Link to="/around">Films</Link>
              </S.LI>
              <S.LI>
                <Link to="/likes">Like</Link>
              </S.LI>

              <S.LI>
                <Link to="/about">About</Link>
              </S.LI>
            </S.UL>
          </S.Container>
        </Wrapper>
      </S.Header>
    </>
  );
};

export default Header;

// *************************NEW VERSION************************* //
// import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/HeaderBar.css";

// export const NavBarElements = () => {
//   return (
//     <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="#home">로고들어갈자리</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto"></Nav>
//           <Nav>
//             <Nav.Link href="#deets">Favoris</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               Login
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };
