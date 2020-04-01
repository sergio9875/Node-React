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






























// const DialogItem = (props) => {
//     return (
//         <div className={s.dialog}>
//             <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>

//     )
// }

// const Message = (props) => {
//     return (
//         <div className={s.dialog}>{props.message}</div>

//     )
// }

// const Dialogs = (props) => {
//     return (
//         <div className={s.dialogs}>
//             <div className={s.dialogsItems}>
//                 <DialogItem name="Svetik" id="1" />
//                 <DialogItem name="Serg" id="2" />
//                 <DialogItem name="Nik" id="3" />
//                 <DialogItem name="Murz" id="4" />




//             </div>
//             <div className={s.messages}>
//                 <Message message="Hi" />
//                 <div className={s.dialog}>Hello</div>
//                 <div className={s.dialog}>Yes</div>

//             </div>

//         </div>
//     )
// }

// export default Dialogs;