import React from 'react';
import Card from "react-bootstrap/Card";
import axios from 'axios';


export default class Football extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/football/`)
            .then(res => {
                console.log(res)
                const persons = res.data;
                this.setState({ persons });
            })
    }




    render() {
        return (

            <div className="cards_team">
                {this.state.persons.map(person =>
                    //   <li key={person.id}>,{person.category},{person.datetime}</li>
                    <div key={person.id} className="cards">
                        <Card style={{ width: '18rem', float: 'left' }}>
                            <Card.Body>
                                <Card.Title>{person.teamA} vs {person.teamB}</Card.Title>


                                <Card.Link href="game">Result</Card.Link>

                            </Card.Body>
                        </Card>

                    </div>

                )}
            </div>
        )
    }
}

