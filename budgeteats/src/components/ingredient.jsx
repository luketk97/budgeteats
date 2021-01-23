import React, { Component } from "react";
import IngredientCart from "./ingredientCart";
import IngredientSearch from "./ingredientSearch";

const tableStyle = {
  width: "40%",
  margin: "5%",
  display: "inline-block",
  overflow: "auto",
  borderRadius: 10,
};

class Ingredient extends Component {
  state = {
    stores: [],
    ingredients: [],
    filterIngredients: [],
    addedIngredients: [],
    ingredientsName: [],
  };

  addIngredient = (ingredient) => {
    var addedIngredients = this.state.addedIngredients;
    const index = addedIngredients.indexOf(ingredient);
    if (index === -1) {
      addedIngredients = [...this.state.addedIngredients, ingredient];
      this.setState({ addedIngredients });
    }
  };

  removeIngredient = (ingredient) => {
    var addedIngredients = this.state.addedIngredients;
    const index = addedIngredients.indexOf(ingredient);

    if (index > -1) {
      addedIngredients.splice(index, 1);
    }

    this.setState({ addedIngredients });
  };

  filterIngredient = () => {};

  componentDidMount() {
    var ingredients = [
      {
        name: "tomato",
        price: 10.0,
        store: "costco",
      },
      {
        name: "tomato",
        price: 9.0,
        store: "sobeys",
      },
      {
        name: "banana",
        price: 15.0,
        store: "costco",
      },
      {
        name: "banana",
        price: 20.0,
        store: "sobeys",
      },
    ];

    var stores = ["costco", "sobeys"];

    var ingredientsName = [];

    ingredients.forEach((ingredient) => {
      const index = ingredientsName.indexOf(ingredient.name);
      if (index === -1) {
        ingredientsName.push(ingredient.name);
      }
    });

    //What we have: store name, item name, item price per store
    var newFormat = [];
    ingredientsName.forEach((name) => {
      var items = new Array(stores.length + 1);
      items[0] = name;
      var filter = ingredients.filter((ingredient) =>
        ingredient.name.includes(name)
      );
      filter.forEach((item) => {
        stores.forEach((store, index) => {
          if (store === item.store) {
            items[index + 1] = item.price;
          }
        });
      });
      newFormat.push(items);
    });

    this.setState({
      ingredients: newFormat,
      stores,
      filterIngredients: newFormat,
      ingredientsName,
    });
  }
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={tableStyle}>
          <IngredientSearch
            ingredients={this.state.filterIngredients}
            addIngredient={this.addIngredient}
            onSearch={this.filterIngredients}
            stores={this.state.stores}
            ingredientsName={this.state.ingredientsName}
          />
        </div>
        <div style={tableStyle}>
          <IngredientCart
            addedIngredients={this.state.addedIngredients}
            removeIngredient={this.removeIngredient}
            stores={this.state.stores}
          />
        </div>
      </div>
    );
  }
}

export default Ingredient;
