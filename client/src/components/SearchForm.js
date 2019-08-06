import React from "react";
import { Jumbotron, Form, FormGroup, Label, Input, Col, Button, Row } from "reactstrap";
import SearchResult from "./SearchResult";
import API from "../utils/API";

class SearchForm extends React.Component {

    state = {
        location: "",
        gender: "",
        dogAllergy: false,
        catAllergy: false,
        otherAllergy: false,
        results: []
    };

    handleSubmit = event => {
        event.preventDefault();
        const { location, gender, dogAllergy, catAllergy, otherAllergy } = this.state;
        const info = {
            location: location,
            gender: gender,
            dogAllergy: dogAllergy,
            catAllergy: catAllergy,
            otherAllergy: otherAllergy
        };
        API.findRooms(info)
            .then(res => {
                var data = res.data ? res.data : [];
                this.setState({ results: data })
            });
    };

    handleChange = event => {
        const name = event.target.name;

        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            [name]: value
        });
    };

    render() {

        if (this.state.results.length !== 0) {
            var results = this.state.results.map(result => {
                return <SearchResult key={result.description} {...result} />;
            });

            return (
                <div>
                    <Row>
                        <Col xs="10" sm="8" className="justify-content-start my-5">
                            <Button onClick={() => this.setState({ results: [] })}>Back</Button>
                        </Col>
                    </Row>
                    <div>{results}</div>
                </div>
            );
        }

        const styles = {
            jumbotron: {
                backgroundColor: "black"
            },
            header: {
                color: "white",
                textAlign: "center"
            }
        };

        return (
            <div>
                <Jumbotron style={styles.jumbotron}>
                    <h1 className="display-4" style={styles.header}>Find A Roommate</h1>
                    <br></br><br></br>
                </Jumbotron>
                <Form onSubmit={this.handleSubmit} className="my-5">
                    <FormGroup row className="d-flex justify-content-center">
                        <Col xs="10" sm="8">
                            <Label for="location">Location</Label>
                            <Input onChange={this.handleChange} type="text" name="location" id="location" placeholder="Enter city, state or zip code" />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="d-flex justify-content-center">
                        <Col xs="10" sm="8">
                            <Label for="gender">Gender Preference</Label>
                            <Input onChange={this.handleChange} type="select" name="gender" id="gender">
                                <option value="">Doesn't matter</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="nonbinary">Nonbinary</option>
                                <option value="other">Other</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="d-flex justify-content-center">
                        <Col xs="10" sm="8">
                            <Label for="pets">I can't live with...</Label>
                            <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleChange} name="dogAllergy" type="checkbox" id="dog-checkbox"></Input>
                                    Dogs
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleChange} name="catAllergy" type="checkbox" id="cat-checkbox"></Input>
                                    Cats
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleChange} name="otherAllergy" type="checkbox" id="other-checkbox"></Input>
                                    Other
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="d-flex justify-content-center">
                        <Col xs="10" sm="8" className="d-flex justify-content-end">
                            <Button size="lg">Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }

}

export default SearchForm;