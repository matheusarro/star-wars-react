import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => {
  return (
    <Container>
      <PhotoContainer>
        <img src={'./img/welcome.png'} alt={'Welcome'}></img>
      </PhotoContainer>
    </Container>
  );
};

export default HomePage;