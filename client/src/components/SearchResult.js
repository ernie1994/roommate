import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';

class SearchResult extends React.Component {
    render() {
        return (
            <Card
                onClick={
                    () => this.props.handleRoomClick({ ...this.props })
                }
                className="mb-3">
                <Row className="no-gutters">
                    <Col md="4">
                        <CardImg src={this.props.images[0] ? this.props.images[0].url : this.props.image} alt=""></CardImg>
                    </Col>
                    <Col md="8">
                        <CardBody>
                            <CardTitle tag="h1">{this.props.user ? this.props.user.name : "No Name"}</CardTitle>
                            <CardSubtitle tag="h6">{`${this.props.address}, ${this.props.city}, ${this.props.state} ${this.props.zip}`}</CardSubtitle>
                            <br></br>
                            <CardText>{this.props.description}</CardText>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default SearchResult;