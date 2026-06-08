import Welcome,{Bye} from "./Pages/practise"
import Counter from "./Pages/Hooks";
function App() {
    const city = "bhopal";
  return (
    <div>
    <h1>welcome to react</h1>
    <h1>city: {city}</h1>
        <Welcome />
        <Bye/>
      <Counter/>
    </div>
  );
}

export default App;