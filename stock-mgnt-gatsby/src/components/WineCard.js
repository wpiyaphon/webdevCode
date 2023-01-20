import React from 'react';
import { Card, Button } from 'react-bootstrap';


function CoffeeCard(props) {
    const { winery, wine, image, avgRating, reviewRating, location, price, handleClick } = props;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} style={{width: '6rem', height: '14rem', textAlign:'center'}} />
            <Card.Body>
                <Card.Title>{wine} - {price} Baht</Card.Title>
                <Card.Text>
                    {winery} - {location} <br />
                    Avg Rating: {avgRating} <br />
                    Reviews Rating: {reviewRating}
                </Card.Text>
                <Button variant="primary" onClick={handleClick}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default CoffeeCard;