import "./Circle.css";

export default function Circle(props) {
  return (
    <div className="Circles">
      <div className={props.activeCircle === "circle1" ? "selected" : ""}>1</div>
      <div className={props.activeCircle === "circle2" ? "selected" : ""}>2</div>
      <div className={props.activeCircle === "circle3" ? "selected" : ""}>3</div>
      <div className={props.activeCircle === "circle4" ? "selected" : ""}>4</div>
      
    </div>
  );
}
