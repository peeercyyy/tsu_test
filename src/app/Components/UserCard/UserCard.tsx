import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

type UserCardProps = {
  avatar?: string;
  firstName: string;
  lastName: string;
  patronymic?: string;
  email: string;
};

export const UserCard = (user: UserCardProps) => {
  return (
    <Card style={{ width: '20em', marginBottom: '1em' }}>
      <Card.Body>
        <Card.Img
          variant='top'
          src={user.avatar}
          className='cardImg'></Card.Img>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>{user.firstName}</ListGroupItem>
          <ListGroupItem>{user.lastName}</ListGroupItem>
          {user.patronymic ? (
            <ListGroupItem>{user.patronymic}</ListGroupItem>
          ) : null}
          <ListGroupItem>{user.email}</ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
