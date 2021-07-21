import { useState, useEffect } from "react";
import styled from 'styled-components';
import { IoChevronDownOutline } from 'react-icons/io5';
import { fetchPeoplePage } from "../adapters/swapiServices";
import CharacterCard from "../components/atoms/CharacterCard";

const NUMBER_OF_CARDS = 9;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
`;

const CardsContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const IconContainer = styled.span`
  margin: auto;
`;

const ChevronDown = styled(IoChevronDownOutline)`
  cursor: pointer;
`;

const PeoplePage = () => {
  const [charactersList, setCharactersList] = useState([]);
  const [exhibitionList, setExhibitionList] = useState([]);
  const [apiPage, setApiPage] = useState(1);
  const [exhibitionPage, setExhibitionPage] = useState(1);
  const [nextApiPage, setNextApiPage] = useState(true);
  

  useEffect(() => {
    const getCharacters = async () =>{
      const people = await fetchPeoplePage(apiPage);
      const newCharacters = people.results;

      setCharactersList((charactersList) => [...charactersList, ...newCharacters]);
      setNextApiPage(!!people.next);
    }

    getCharacters();
  }, [apiPage]);


  useEffect(() => {
    let newExhibitionList = [];
    charactersList.forEach( (char, index) => index < (exhibitionPage * NUMBER_OF_CARDS) ? newExhibitionList.push(char) : null);

    setExhibitionList(newExhibitionList);
  }, [exhibitionPage, charactersList]);


  const handleNextPage = () => {
    if ( (exhibitionPage + 1) * NUMBER_OF_CARDS > charactersList.length && nextApiPage) {
      const newApiPage = apiPage + 1;
      setApiPage(newApiPage);
    }
    const newExhibitionPage = exhibitionPage + 1;
    setExhibitionPage(newExhibitionPage);
  };

  return (
    <Container>
      <CardsContainer>
        {
          exhibitionList.map( (char) => {
            return (
              <CharacterCard
                key = {char.id}
                // id = {char.id}  --> id para foto dos pernagens
                name = {char.name}
                homeworld = {char.homeworld}
                birth_year = {char.birth_year}
              />
            );
          })
        }
      </CardsContainer>
      <IconContainer>
        {
          nextApiPage || exhibitionList.length < charactersList.length
          ? <ChevronDown size={'3em'} title={`Carregar página ${exhibitionPage + 1}`} onClick={handleNextPage}/>
          : null
        }
      </IconContainer>
    </Container>
  );
};

export default PeoplePage;