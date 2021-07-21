import styled from 'styled-components';
import UnderConstruction from '../components/atoms/UnderConstruction';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
`;

const SpeciesPage = () => {
  return (
    <Container>
      <UnderConstruction />
    </Container>
  );
};

export default SpeciesPage;