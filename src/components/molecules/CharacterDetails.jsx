import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
padding: 2rem;
`;

const NameContainer = styled.span`
  font-size: 2rem;
`;

const CharDetail = styled.span`
  font-size: 1.3rem;
`;

const Photo = styled.div`
  margin: auto;
`;

const CharacterDetails = ({character}) => {
  return (
    <Container>
      <Photo>
        <img src={`./img/char/0.jpg`} alt={`${character.name}`}></img>
      </Photo>
      <NameContainer>{character.name}</NameContainer>
      <CharDetail>PLANETA: {character.homeworld}</CharDetail>
      <CharDetail>NASCIMENTO: {character.birth_year}</CharDetail>
    </Container>
  );
}

export default CharacterDetails;