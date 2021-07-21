import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const Logo = styled.div`
  display: flex;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const NavOption = styled(NavLink)`
  color: gold;
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 2rem;
  text-decoration: none;
`;

const Navigation = () => {

  return(
    <>
      <Container>
        <NavLink to='/'>
          <Logo>
            <img src="./img/starwars.png" alt="Star Wars Logo"></img>
          </Logo>
        </NavLink>
        <Menu>
            <NavOption to='/people' activeStyle={{color: 'white'}}>PESSOAS</NavOption>
            <NavOption to='/planets' activeStyle={{color: 'white'}}>PLANETAS</NavOption>
            <NavOption to='/starships' activeStyle={{color: 'white'}}>NAVES</NavOption>
            <NavOption to='/vehicles' activeStyle={{color: 'white'}}>VEÍCULOS</NavOption>
            <NavOption to='/species' activeStyle={{color: 'white'}}>ESPÉCIES</NavOption>
            <NavOption to='/films' activeStyle={{color: 'white'}}>FILMES</NavOption>
        </Menu>
      </Container>
    </>
  );
};

export default Navigation;