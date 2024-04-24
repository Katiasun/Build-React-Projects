import "./App.css";
import Accordian from "./components/accordian";
import StarRating from "./components/star-rating";
function App() {
  return (
    <div className="App">
      {/* {Accordian component} */}
      <Accordian />

      {/* {StarRating component} */}
      <StarRating />
    </div>
  );
}

export default App;
