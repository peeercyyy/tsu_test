import { Container } from 'react-bootstrap';
import { NavBar } from '../../Components/NavBar/NavBar';
import { UserCard } from '../../Components/UserCard/UserCard';
import { users } from '../../Users/Users';

export const MainPage = () => {
  const userCards = users.map((user) => (
    <UserCard
      key={user.id}
      {...user}
    />
  ));

  return (
    <>
      <NavBar></NavBar>
      <Container className='cardsContainer'>{userCards}</Container>
    </>
  );
};
