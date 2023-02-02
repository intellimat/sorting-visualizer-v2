import { BarRelativeHeight, MaxInteger } from "../../../config";
import "./ArrayBar.css";

interface Props {
  index: number;
  value: number;
}

function ArrayBar({ index, value }: Props) {
  return (
    <div
      className="array-bar array-bar-hover-effect"
      style={{ height: `${(value / MaxInteger) * BarRelativeHeight}vh` }}
    >
      <div className="number"> {value} </div>
    </div>
  );
}

export default ArrayBar;
