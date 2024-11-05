import React from 'react';
import { Container } from 'reactstrap';
import Navi from '../navi/Navi';
import Deashboard from './Deashboard';

function App() {
  return (
      <Container>
        <Navi></Navi>
        <Deashboard></Deashboard>
      </Container>
  );
}
export default App;
