import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import styles from './Users.module.css'
import  Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem'


class  Users extends React.Component {



    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
            &count=${this.props.pageSize}`)
            .then(({ data })=> {
                console.log(data);
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(100);// or data.totalCount = 3066

            })
            .catch((err)=> {})
    }

    onPageChange = (pageNumber => {
        console.log(pageNumber);
        {this.props.setCurrentPage(pageNumber)};

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
            &count=${this.props.pageSize}`)
            .then(({ data })=> {
                console.log(data);
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(100);// or data.totalCount = 3066
            })
            .catch((err)=> {})





    })

    render() {
let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
let pages = [];
for (let i=1; i <= pagesCount; i++) {
    pages.push(i)

}
        return (
            <div>
                <div>
                    <div> {
                        pages.map(p => {
                            return  <span className={this.props.currentPage === p && styles.selectedPages}
                            onClick={() => this.onPageChange(p)}>{p}</span>

                        })
                    } </div>
                </div>
                {this.props.users.map(u =>
                    <div key={u.id} className="cards">
                        <Card style={{width: '18rem', float: 'left'}}>
                            <Card.Body>
                                <Card.Title>{u.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{u.category}</Card.Subtitle>
                                <Card.Text>
                                    Location : {u.email}
                                </Card.Text>
                                {u.followed
                                    ? <Button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }} variant="outline-secondary">Unfollow</Button>
                                    : <Button onClick={() => {
                                        this.props.follow(u.id)
                                    }} variant="success">Follow</Button>}


                            </Card.Body>
                        </Card>

                    </div>
                )}
            </div>
        )
    }
}


export default Users;






