const Slider = (props) => {
  return (
    <div className="slidecontainer">
      <input
        type="range"
        min="1"
        max="100"
        value="50"
        className="slider"
        id="myRange"
      />
    </div>
  );
};

export default Slider;
