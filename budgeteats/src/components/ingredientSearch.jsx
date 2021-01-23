import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class IngredientSearch extends Component {
  state = {};

  addIngredient = (ingredient) => {
    this.props.addIngredient(ingredient);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search for Ingredients"
          style={{ margin: 20, width: "60%", top: 0, fontSize: 25 }}
        ></input>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Ingredient Name</th>
              {this.props.stores.map((store, index) => {
                return <th key={index}>{store}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.ingredients.map((ingredient, index) => {
              return (
                <tr key={index}>
                  <td>{ingredient[0]}</td>
                  {ingredient.map((item, index) => {
                    if (index > 0) return <td key={index}>{"$ " + item}</td>;
                  })}
                  <td style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="info"
                      onClick={() => this.addIngredient(ingredient)}
                    >
                      Add
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default IngredientSearch;
