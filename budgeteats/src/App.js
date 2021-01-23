import NavigationBar from "./components/navigationBar";
import Ingredient from "./components/ingredient";

function App() {
  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Ingredient />
      </main>
    </div>
  );
}

export default App;
