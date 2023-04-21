import { Container, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Pied from './Footer';
import Compteur from './Compteur/Compteur';
import Page1 from './Page1';
import Page2 from './Page2';
import NotFound from './404';

export function App() {
  return (
    <Container>
      <Router page={window.location.pathname} />
      <Pied />
    </Container>
  );
}

function Router({ page }: { page: string }) {
  switch (page) {
    case '/':
    case '/page1':
      return <Page1 />;
    case '/page2':
      return <Page2 />;
    case '/compteur':
      return <Compteur />;
    default:
      return <NotFound />;
  }
}
