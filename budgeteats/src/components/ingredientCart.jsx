import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CounterInput from "react-bootstrap-counter";

class IncredientCart extends Component {
  state = {
    total: [],
  };

  removeIngredient = (ingredient) => {
    this.props.removeIngredient(ingredient);
  };
  render() {
    return (
      <div>
        <Table striped bordered hover variant="light" responsive="md">
          <thead>
            <tr>
              <th>Ingredient Name</th>
              {this.props.stores.map((store, index) => {
                return <th key={index}>{store}</th>;
              })}
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {this.props.addedIngredients.map((ingredient, index) => {
              return (
                <tr key={index}>
                  <td>{ingredient[0]}</td>
                  {ingredient.map((item, index) => {
                    if (index > 0) return <td key={index}>{"$ " + item}</td>;
                  })}
                  <td>
                    <CounterInput
                      value={1}
                      min={1}
                      max={10}
                      onChange={() => {}}
                    />
                  </td>
                  <td style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      onClick={() => this.removeIngredient(ingredient)}
                      variant="danger"
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th>$150</th>
              <th>$200</th>
            </tr>
          </tfoot>
        </Table>
      </div>
    );
  }
}

export default IncredientCart;
