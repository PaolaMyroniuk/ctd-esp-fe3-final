import React from "react";
import {Link} from "react-router-dom"
import Card2 from 'react-bootstrap/Card';
import {addFav} from './utils/localStorage.js'

const Card = ({dent}) => {

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

        <Card2 style={{ width: '18rem' }}>
      <Card2.Img variant="top" src="/images/doctor.jpg"/>
      <Card2.Body>
        <Card2.Title> <Link to={/dentist/+dent.id}>{dent.name}</Link></Card2.Title>
        <Card2.Text>
          {dent.username}
        </Card2.Text>
        <button  onClick={() =>addFav(dent) } className="favButton">🌟</button>
      </Card2.Body>
    </Card2>
    </div>
  );
};

export default Card;
