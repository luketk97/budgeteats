import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CounterInput from "react-bootstrap-counter";

class IncredientCart extends Component {
  state = {
    count: [],
  };

  removeIngredient = (ingredient) => {
    this.props.removeIngredient(ingredient);
  };

  setPrice = () => {
    var count = this.state.count;

    var i = count.length;
    while (this.props.addedIngredients.length > i) {
      count.push(1);
      ++i;
    }

    console.log(i);

    var totalPrice = new Array(this.props.stores.length).fill(0);
    this.props.addedIngredients.forEach((ingredient, i) => {
      ingredient.slice(1).forEach((price, index) => {
        totalPrice[index] += price * count[i];
      });
    });

    return totalPrice;
  };

  render() {
    return (
      <div>
        <Table
          onChange={this.setPrice}
          striped
          bordered
          hover
          variant="light"
          responsive="md"
        >
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
            {this.props.addedIngredients.map((ingredient, i) => {
              return (
                <tr key={i}>
                  <td>{ingredient[0]}</td>
                  {ingredient.slice(1).map((item, index) => {
                    return (
                      <td key={index}>{"$ " + item * this.state.count[i]}</td>
                    );
                  })}
                  <td>
                    <CounterInput
                      value={this.state.count[i]}
                      min={1}
                      max={10}
                      onChange={(val) => {
                        var count = this.state.count;
                        count[i] = val;
                        this.setState({ count });
                      }}
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
              {this.setPrice().map((price, i) => {
                return <th key={i}>{"$ " + parseFloat(price).toFixed(2)}</th>;
              })}
            </tr>
          </tfoot>
        </Table>
      </div>
    );
  }
}

export default IncredientCart;
