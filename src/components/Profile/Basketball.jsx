import Card from "react-bootstrap/Card";
import React from 'react'
import axios from 'axios';



export default class Basketball extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/basketball/`)
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
