import React from 'react'
import { Card,Button } from 'react-bootstrap';

export default function Cards(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{props.titre}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Button variant="primary">More Details</Button>
            </Card.Body>
        </Card>
    )
}

