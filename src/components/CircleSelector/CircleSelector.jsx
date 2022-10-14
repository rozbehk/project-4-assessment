import "./CircleSelector.css";

export default function CircleSelector(props) {
  function handleChange(e) {
    console.log(props);
    props.handleSelected(e.target.value);
  }

  return (
    <div className="CircleSelector">
      <button
        className={props.activeCircle === "circle1" ? "selected" : ""}
        value="circle1"
        onClick={handleChange}
      >
        {props.activeCircle === "circle1"
          ? "Circle 1 Selected"
          : "Select Circle 1"}
      </button>
      <button
        className={props.activeCircle === "circle2" ? "selected" : ""}
        value="circle2"
        onClick={handleChange}
      >
        {props.activeCircle === "circle2"
          ? "Circle 1 Selected"
          : "Select Circle 2"}
      </button>
      <button
        className={props.activeCircle === "circle3" ? "selected" : ""}
        value="circle3"
        onClick={handleChange}
      >
        {props.activeCircle === "circle3"
          ? "Circle 3 Selected"
          : "Select Circle 3"}
      </button>
      <button
        className={props.activeCircle === "circle4" ? "selected" : ""}
        value="circle4"
        onClick={handleChange}
      >
        {props.activeCircle === "circle4"
          ? "Circle 4 Selected"
          : "Select Circle 4"}
      </button>
    </div>
  );
}
