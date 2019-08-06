import React from "react";
import { Jumbotron } from "reactstrap";

class SearchForm extends React.Component {

    render() {

        const styles = {
            jumbotron: {
                backgroundColor: "black"
            }
        };

        return (
            <div>
                <Jumbotron style={styles.jumbotron}>

                </Jumbotron>
            </div>
        );
    }

}

export default SearchForm;