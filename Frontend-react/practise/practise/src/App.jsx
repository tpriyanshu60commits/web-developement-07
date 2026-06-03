import Welcome,{Bye} from "./Pages/practise"

function App() {
    const city = "bhopal";
  return (
    <div>
    <h1>welcome to react</h1>
    <h1>city: {city}</h1>
        <Welcome />
        <Bye/>

    </div>
  );
}

export default App;