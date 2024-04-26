import "./App.css";
import Accordian from "./components/accordian";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
function App() {
  return (
    <div className="App">
      {/* {Accordian component} */}
      {/* <Accordian /> */}

      {/* {StarRating component} */}
      {/* <StarRating noOfStars={7} /> */}

      {/* ImageSlider component*/}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"} />
    </div>
  );
}

export default App;
