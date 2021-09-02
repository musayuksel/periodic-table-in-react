import './App.css';

function App() {
  
  fetch("https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json")
    .then(response => response.json())
    .then(data => console.log(data))
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
