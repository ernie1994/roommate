import React from "react";
import { Row, Col } from "reactstrap";

class User extends React.Component {
    render() {

        const styles = {
            profilePic: {
                width: "250px",
                height: "250px",
                marginBottom: "10%",
                borderRadius: "50%"
            },
            list: {
                paddingLeft: "15px",
            },
            listItem: {
                textAlign: "left",
            }
        };

        const user = this.props.user;

        return (
            <Row className="d-flex justify-content-center">
                <Col sm="6" md="5" className="d-flex justify-content-center">
                    <img
                        style={styles.profilePic}
                        className="img-fluid"
                        alt={user.name}
                        src={user.profileImage}>
                    </img>
                </Col>
                <Col sm="6" md="5" className="d-flex justify-content-center justify-content-sm-start">
                    <div>
                        <h2 className="text-center text-sm-left">
                            <strong>{user.name}</strong>
                            <small>, {user.age}</small>
                        </h2>
                        <h4 className="text-center text-sm-left"><small>"{user.bio}"</small></h4>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>{user.smokes}</li>
                            <li style={styles.listItem}>{user.drinks}</li>
                            <li style={styles.listItem}>has {user.pets}</li>
                            <li style={styles.listItem}>{user.upLate} up late</li>
                            <li style={styles.listItem}>allergies: {user.allergies}</li>
                        </ul>
                    </div>
                </Col>
                <Col xs="10" className="d-flex justify-content-center my-3">
                    <div>
                        <h2 className="text-center">Contact</h2>
                        <p className="text-center">{user.email}</p>
                        <p className="text-center">{user.phone}</p>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default User;