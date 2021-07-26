import styled from 'styled-components';
import { IoConstructOutline } from 'react-icons/io5';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const Construct = styled(IoConstructOutline)`
  margin-left: auto;
  margin-right: auto;
`;

const Text = styled.span`
  font-size: 3rem;
  margin-top: 1rem;
`;

const UnderConstruction = () =>{
  return (
    <Container>
      <Construct size={'10em'} />
      <Text>EM CONSTRUÇÃO</Text>
    </Container>
  )
};

export default UnderConstruction;