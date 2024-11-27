import React from 'react';
import { Card } from 'react-bootstrap';
import fantasty from "../data/fantasy.json"

// Componente SingleBook che riceve un oggetto libro tramite props
function SingleBook({ book }) {
  // Estrarre il titolo e l'URL della copertina dal libro
  const { title, coverImage } = book;

  return ({fantasty.map ((book)=> {return(
    <Card style={{ width: '18rem' }}>
      {/* Immagine della copertina */}
      <Card.Img variant="top" src={coverImage.img} alt={title.title} />
      
      {/* Corpo della Card con il titolo */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
    )})}
  );
}
export default SingleBook