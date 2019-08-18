import React from "react";
import { Row, Col } from "reactstrap";
import ImageGrid from "./ImageGrid";
import User from "./User";

class RoomDetail extends React.Component {
    render() {
        const room = this.props.room;

        const styles = {
            list: {
                paddingLeft: "15px",
            },
            listItem: {
                textAlign: "left",
            }
        };

        return (
            <>
                <User user={this.props.room.user} />
                <Row className="my-3-3 d-flex justify-content-center">
                    <Col xs="12" className="d-flex justify-content-center">
                        <div>
                            <h2 className="text-center">{`${room.address}, ${room.state} ${room.zip}`}</h2>
                            <h4 className="text-center"><small>"{room.description}"</small></h4>
                        </div>
                    </Col>
                    <Col xs="4" className="d-flex justify-content-center">
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Genders: {room.gender}</li>

                            {
                                ["catAllergy", "dogAllergy", "otherAllergy"].map(prop => {
                                    if (room[prop]) {
                                        let pets = "";
                                        switch (prop) {
                                            case "catAllergy":
                                                pets = "cats";
                                                break;
                                            case "dogAllergy":
                                                pets = "dogs";
                                                break;
                                            case "otherAllergy":
                                                pets = "other allergies";
                                                break;
                                            default:
                                                break;
                                        }
                                        return (<li style={styles.listItem} key={prop}>has {pets}</li>);
                                    }
                                    return null;
                                })
                            }
                        </ul>
                    </Col>
                </Row>
                <ImageGrid images={this.props.room.images}></ImageGrid>
            </>
        );
    }
}

export default RoomDetail;