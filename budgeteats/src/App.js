import NavigationBar from "./components/navigationBar";
import Ingredient from "./components/ingredient";
import Homepage from "./components/homepage";

function App() {
  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Homepage />
      </main>
    </div>
  );
}

export default App;
