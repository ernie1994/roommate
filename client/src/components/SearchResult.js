import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';

class SearchResult extends React.Component {

    render() {
        return (
            <div>
                <Card className="mb-3">
                    <Row className="no-gutters">
                        <Col md="4">
                            <CardImg src={this.props.image} alt=""></CardImg>
                        </Col>
                        <Col md="8">
                            <CardBody>
                                <CardTitle tag="h1">{this.props.name}</CardTitle>
                                <CardSubtitle tag="h6">{this.props.address}</CardSubtitle>
                                <br></br>
                                <CardText>{this.props.description}</CardText>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default SearchResult;