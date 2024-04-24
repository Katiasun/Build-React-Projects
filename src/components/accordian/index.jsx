//accordian selection
// multiple selection
import { useState } from "react";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="wrapper">
      <div className="accordion"></div>
    </div>
  );
}
