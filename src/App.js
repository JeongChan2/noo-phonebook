import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';
import SearchBox from './component/SearchBox';

// 유저는 연락처를 생성할 수 있다.
// 연락처에는 이름과 전화번호 정보가 필요하다.
// 유저는 연락처 리스트를 볼 수 있다.
// 유저는 이름으로 연락처를 검색할 수 있다.

function App() {
  return (
    <div>
      <h1 className='title'>연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
