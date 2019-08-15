import React from "react";
import { Col, Row } from "reactstrap";

class ImageGrid extends React.Component {
    render() {
        return (
            <>
                <Row className="d-flex justify-content-center">
                    {
                        this.props.images.map(image => {
                            return (
                                <Col
                                    key={image._id}
                                    className="d-flex justify-content-center"
                                    xs="12"
                                    sm="6"
                                    md="4"
                                    lg="3"
                                >
                                    <img
                                        className="img-thumbnail img-fluid"
                                        alt={image.type}
                                        src={image.url}>
                                    </img>
                                </Col>
                            );
                        })
                    }
                </Row>
            </>
        );
    }
}

export default ImageGrid;