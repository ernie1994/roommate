import React from "react";
import SearchResult from "./SearchResult";
import "../../src/styles.css";

class SearchResults extends React.Component {

    state = {
        results: [
            {
                name: "Dizzy Lizzy",
                city: "Davis",
                image: "https://cdn10.phillymag.com/wp-content/uploads/sites/3/2018/10/hotel-palomar-green-room-540x360.jpg",
                address: "1112 Menlo Dr, Davis, CA 95616",
                description: "I live in a four bedroom house. We all have a total of two dogs, a cat and a bird, so you must be an animal-lover to live here!"
            },
            {
                name: "Mr. Rogers",
                city: "Davis",
                image: "https://images1.apartments.com/i2/KbHuCTIzntW1HHBQsJvVEs0RpYK55CXEsqBwFnLykto/117/2-br-2-bath---3425-broadway-apt-100-100-unit-apt-100-sacramento-ca-2-br-2-bath---3425-broadway-apt-100-100.jpg",
                address: "1000 J St, Sacramento, CA 90024",
                description: "I am the nicest man alive. Please come live with me. California rent is too damn high!!!"
            }
        ]
    };

    fetchResults = () => {
        //get results
        //change state
    };

    componentDidMount() {
        this.fetchResults();
    }

    render() {
        var results = this.state.results.map(result => {
            return <SearchResult key={result.description} {...result} />;
        });

        return (
            <div>{results}</div>
        );
    }
}

export default SearchResults;