import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid gold;
  border-radius: 7px;
  padding: 1rem;
  width: 30rem;
  margin: 1rem;
  background-color: black;
  cursor: pointer;
`;

const Photo = styled.div`
  width: fit-content;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  margin-left: 1.5rem;
`;

const CharName = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
`;

const CharDetail = styled.span`
  font-size: 1.3rem;
`;

const CharacterCard = ( { id = 0, name = 'Character Name', homeworld = 'Home World', birth_year = 'Birth Year', onClick} ) => {
  return (
    <Container onClick={onClick} id={id}>
      <Photo>
        <img src={`./img/char/0.jpg`} alt={`${name}`}></img>
      </Photo>
      <Info>
        <CharName>{name}</CharName>
        <CharDetail><span>PLANETA:</span> {homeworld}</CharDetail>
        <CharDetail><span>NASCIMENTO:</span> {birth_year}</CharDetail>
      </Info>
    </Container>
  );
};

export default CharacterCard;