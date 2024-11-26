import Card from 'react-bootstrap/Card';

function MyFooter() {
  return (
    <Card>
      <Card.Header>Contacts</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
<a href='#' className='footerLink'>Localizzatore di negozi</a>
<a href='#' className='footerLink'>Registrati per ricevere e-mail</a>
<a href='#' className='footerLink'>Sign up for Texts</a>
          </p>
          There is no friend as loyal as a book
          <footer className="blockquote-footer">
          <cite title="Ernest Hemingway"> Ernest Hemingway</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default MyFooter;