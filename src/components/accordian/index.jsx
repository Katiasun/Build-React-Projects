//accordian selection
// multiple selection
import { useState } from "react";
import "./styles.css";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div className="wrapper">
      <button>Enable Multi Selection</button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? <div className="content">{dataItem.answer}</div> : null}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}
