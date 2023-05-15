import React from "react";
import { Wrapper, device } from "../../styles/variables";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import LocationDisplay from "../../utils/locationDisplay";
import Overlay from "../Overlay/Overlay";
import * as S from "./Header.style";
import OverlayButton from "./OverlayButton/OverlayButton";

const Header = ({ color, bgColor, isSearching }) => {
  // ************************ useMediaQuery? ************************ //
  const isTabletPortrait = useMediaQuery({ query: device.TabletPortrait });
  const { isOpen } = useSelector((state) => state.overlay);
  // ************************ https://kyung-a.tistory.com/36 ************************ //
  const history = useHistory();
  // onClick Handleur
  // ************************ https://kyung-a.tistory.com/36 ************************ //
  const onClickSearchCancel = () => {
    history.goBack();
  };

  return (
    <>
      <S.Header bgColor={bgColor}>
        <Wrapper>
          <S.Container isOpen={isOpen} color={color}>
            <S.LogoLinkContainer isOpen={isOpen}>
              <Link to="/" data-testid="logo-button">
                movie
              </Link>
            </S.LogoLinkContainer>
            <S.MenuContainer>
              {!isSearching ? (
                <S.SearchLinkContainer isOpen={isOpen}>
                  <Link to="/search" data-testid="search-button">
                    <S.SearchIcon />
                  </Link>
                </S.SearchLinkContainer>
              ) : (
                <S.SearchCancel onClick={onClickSearchCancel} type="button">
                  Cancel
                </S.SearchCancel>
              )}
              {isTabletPortrait ? (
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
              ) : (
                <OverlayButton color={color} />
              )}
            </S.MenuContainer>
          </S.Container>
          <Overlay />
        </Wrapper>
      </S.Header>
      <LocationDisplay />
    </>
  );
};

Header.defaultProps = {
  color: "white",
  bgColor: "transparent",
  isSearching: false,
};

Header.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  isSearching: PropTypes.bool,
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
