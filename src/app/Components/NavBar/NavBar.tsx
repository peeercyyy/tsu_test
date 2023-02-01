import { Container, Navbar } from 'react-bootstrap';

export const NavBar = () => {
  return (
    <Navbar
      bg='light'
      expand='lg'>
      <Container>
        <Navbar.Brand href='/'>TSU Bootstrap</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
