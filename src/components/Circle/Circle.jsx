import "./Circle.css";

export default function Circle(props) {
  function handleChange(e) {
    console.log(props);
    props.handleSelected(e.target.value);
  }

  return (
    <div className="Circles">
      <div className={props.activeCircle === "circle1" ? "selected" : ""}></div>
      <div className={props.activeCircle === "circle2" ? "selected" : ""}></div>
      <div className={props.activeCircle === "circle3" ? "selected" : ""}></div>
      <div className={props.activeCircle === "circle4" ? "selected" : ""}></div>
      
    </div>
  );
}
