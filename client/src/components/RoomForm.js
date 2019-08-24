import React from "react";
import { Redirect } from "react-router-dom";
import { Input, Col, FormGroup, Label, Form, Button, Jumbotron } from "reactstrap"
import Storage from "../firebase/storage";
import API from "../utils/API";
import Axios from "axios";
import states from "../utils/states";

class RoomForm extends React.Component {

    state = {
        address: "",
        state: "CA",
        city: "",
        zip: "",
        description: "",
        dogAllergy: false,
        catAllergy: false,
        otherAllergy: false,
        gender: "mix",
        user: null,
        files: [],
        lat: "",
        lng: "",
        redirectRoom: null,
        disablePostBtn: false
    };

    componentDidMount() {
        API.getCurrentUser().then(res => this.setState({ user: res.data.user }));
    }

    uploadImages = (files, cb) => {
        let index = 0;
        const urlArray = [];

        function uploadImage(file, imageCb) {
            const imageRef = Storage.ref(`room-images/${require("uuid/v4")()}`);
            imageRef.put(file)
                .then(_snapshot => {
                    return imageRef.getDownloadURL();
                })
                .then(url => {
                    imageCb(null, url)
                })
                .catch(err => imageCb(err));
        }

        function responseHandler(err, url) {
            if (err) cb([]);
            urlArray.push(url);
            index++;
            if (index === files.length) {
                cb(urlArray);
            } else {
                uploadImage(files[index], responseHandler);
            }
        }

        uploadImage(files[index], responseHandler);
    };

    handleSubmit = event => {
        this.setState({ disablePostBtn: true });
        event.preventDefault();
        Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.address} ${this.city} ${this.state} ${this.zip}&key=AIzaSyBQ1_V_WrUt_H5buMATmErTV5MJp-LedFE`).then((res) => {

            let lat;
            let lng;

            if (res.data.results[0]) {
                lat = res.data.results[0].geometry.location.lat;
                lng = res.data.results[0].geometry.location.lng;
            }


            this.setState({ lat: lat, lng: lng }, () => {

                this.uploadImages(this.state.files, arr => {
                    Axios.post("/api/rooms",
                        {
                            ...this.state,
                            urls: arr
                        }
                    ).then(res => {
                        this.setState({ redirectRoom: res.data, disablePostBtn: false });
                    });
                });
            })
        });
    };

    handleChange = event => {
        const target = event.target;
        const name = target.name;

        let value;

        switch (target.type) {
            case "file":
                value = this.state.files;
                for (let i = 0; i < target.files.length; i++) {
                    value.push(target.files[i]);
                }
                break;
            case "checkbox":
                value = target.checked;
                break;
            default:
                value = target.value;
                break;
        }

        this.setState({ [name]: value });
        return false;
    };

    render() {
        const styles = {
            jumbotron: {
                backgroundColor: "black",

                backgroundPosition: "50% 70%"
            },
            header: {
                color: "black",
                textAlign: "center",
                fontWeight: "bold"
            }
        };

        if (this.state.redirectRoom) {
            return (
                <Redirect to={
                    { pathname: "/room", state: { room: this.state.redirectRoom } }
                } />
            );
        }

        return (
            <>
                <Jumbotron style={styles.jumbotron}>
                    <h1 className="display-4" style={styles.header}>Post Your Room</h1>
                    <br></br><br></br>
                </Jumbotron>
                <Form onSubmit={this.handleSubmit} className="my-5">
                    <FormGroup row className="d-flex justify-content-center">
                        <Col xs="10" sm="8">
                            <Label for="address">Address</Label>
                            <Input required onChange={this.handleChange} type="text" name="address" id="address" placeholder="Enter address" />
                        </Col>
                    </FormGroup>

                    <FormGroup row className="d-flex justify-content-center">
                        <Col xs="10" sm="8">
                            <Label for="city">City</Label>
                            <Input required onChange={this.handleChange} type="text" name="city" id="city" placeholder="Enter city or town" />
                        </Col>
                    </FormGroup>

                    <FormGroup row className="d-flex justify-content-center">
                        <Col xs="10" sm="8">
                            <Label for="state">State</Label>
                            <Input onChange={this.handleChange} type="select" name="state" id="state">
                                {states.map(state => <option key={state} value={state}>{state}</option>)}
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="d-flex justify-content-center">
                        <Col xs="10" sm="8">
                            <Label for="zip">Zip Code</Label>
                            <Input onKeyPress={event => {
                                var regex = new RegExp("^[0-9]*$");
                                if (!regex.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                                type="text" minLength={5} maxLength={5} required onChange={this.handleChange} name="zip" id="zip" placeholder="Enter zip code" />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="d-flex justify-content-center">
                        <Col xs="10" sm="8">
                            <Label for="description">Description</Label>
                            <Input required onChange={this.handleChange} type="textarea" name="description" id="description" placeholder="Tell us about your place..." />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="d-flex justify-content-center">
                        <Col xs="10" sm="8">
                            <Label for="gender">Genders that live here...</Label>
                            <Input onChange={this.handleChange} type="select" name="gender" id="gender">
                                <option value="mix">A mix</option>
                                <option value="male">Males</option>
                                <option value="female">Females</option>
                                <option value="nonbinary">Nonbinary</option>
                                <option value="other">Other</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="d-flex justify-content-center">
                        <Col xs="10" sm="8">
                            <Label for="pets">I live with...</Label>
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
                        <Col xs="10" sm="8">
                            <Label
                                for="room-file">
                                <strong>
                                    Room Picture
                            </strong>
                            </Label>
                            <Input
                                onChange={this.handleChange}
                                name="files"
                                required
                                type="file"
                                multiple>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="d-flex justify-content-center">
                        <Col xs="10" sm="8">
                            <Button disabled={this.state.disablePostBtn} size="lg">Post</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </>
        );
    }

}

export default RoomForm;