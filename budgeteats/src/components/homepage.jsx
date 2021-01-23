import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import homeimage from '../home_image.jpeg';

class Homepage extends Component {
    render() {
        const styles = {
            backgroundImage: `url(${homeimage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            
        }
        return(
            <div>
                <Jumbotron style={styles}>
                    <container style={{ display: "flex", justifyContent:'center'}}>
                        <h1 style={{ color: 'white'}}>
                            BudgetEats
                        </h1>
                    </container>
                </Jumbotron>
            </div>
            
        );
    }
}

export default Homepage;