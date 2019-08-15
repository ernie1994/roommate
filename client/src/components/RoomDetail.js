import React from "react";
import { Row, Col } from "reactstrap";
import ImageGrid from "./ImageGrid";

class RoomDetail extends React.Component {
    render() {
        const room = this.props.room;
        console.log({ ...this.props });
        return (
            <>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <h2>{`${room.address}, ${room.state} ${room.zip}`}</h2>
                    </Col>
                </Row>
                <ImageGrid images={this.props.room.images}></ImageGrid>
            </>
        );
    }
}

export default RoomDetail;