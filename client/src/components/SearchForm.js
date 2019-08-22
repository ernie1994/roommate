import React from "react";
import { Jumbotron, Form, FormGroup, Label, Input, Col, Button, Row } from "reactstrap";
import SearchResult from "./SearchResult";
import API from "../utils/API";
import RoomDetail from "./RoomDetail";
import Axios from "axios";

class SearchForm extends React.Component {

    state = {
        location: "",
        gender: "",
        dogAllergy: false,
        catAllergy: false,
        otherAllergy: false,
        results: [],
        room: null,
        range: 3000,
        lat: 0,
        lng: 0,
    };

    getUserLocation = () => {
        return Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location}A&key=AIzaSyBQ1_V_WrUt_H5buMATmErTV5MJp-LedFE`).then((res) => {

            const result = res.data.results[0];
            if (result) {
                const lat = result.geometry.location.lat;
                const lng = result.geometry.location.lng;
                return { lat: lat, lng: lng };
            }
        });
    }

    handleBack = () => {
        const newState = this.state.room ? { room: null } : { results: [] };
        this.setState(newState);
    };

    handleSubmit = event => {
        event.preventDefault();

        this.getUserLocation().then(loc => {
            const { location, gender, dogAllergy, catAllergy, otherAllergy, range, lat, lng } = this.state;
            const info = {
                location: location,
                gender: gender,
                dogAllergy: dogAllergy,
                catAllergy: catAllergy,
                otherAllergy: otherAllergy,
                range: range,
                lat: loc.lat,
                lng: loc.lng
            };

            API.findRooms(info)
                .then(res => {
                    var data = res.data ? res.data : [];
                    this.setState({ results: data }, () => {
                        if (this.state.results.length === 0) window.alert("No rooms found");
                    });
                });
        });

    };

    handleChange = event => {
        const name = event.target.name;

        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            [name]: value
        });
    };

    handleRoomClick = room => {
        this.setState({ room: room });
    };

    render() {
        const styles = {
            jumbotron: {
                backgroundColor: "black",
                backgroundImage: `url("/images/condo.jpeg")`,
                backgroundPosition: "50% 70%"
            },
            header: {
                color: "black",
                textAlign: "center",
                fontWeight: "bold"
            }
        };

        const BackButton = (
            <div>
                <Row className="mx-5 my-5">
                    <Col xs="10" sm="8" className="justify-content-start">
                        <Button onClick={this.handleBack}>Back</Button>
                    </Col>
                </Row>
            </div>
        );

        if (this.state.room) return (<>{BackButton}<RoomDetail room={this.state.room} /></>);

        if (this.state.results.length !== 0) {
            var results = this.state.results.map(result => {
                return <SearchResult handleRoomClick={this.handleRoomClick} key={result._id} {...result} />;
            });
            return (<>{BackButton}<div className="mx-5">{results}</div> </>);
        }

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
                            <Input required onChange={this.handleChange} type="text" name="location" id="location" placeholder="Enter city, state or zip code" />
                        </Col>
                    </FormGroup>

                    <FormGroup row className="d-flex justify-content-center">
                        <Col xs="10" sm="8">
                            <Label for="Range">Distance Range</Label>
                            <Input onChange={this.handleChange} type="select" name="range" id="gender">
                                <option value="">Show All</option>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={20}>20</option>
                                <option value={25}>25</option>

                            </Input>
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
                            <Button size="lg">Search</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }

}

export default SearchForm;