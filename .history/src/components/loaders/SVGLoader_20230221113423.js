import { ReactSVG } from "react-svg";

/*
IMPORTANT
When loading an svg file, make sure you delete all 
class, fill, and stroke properties
then TWs fill-{color} will work
*/

const SVGLoader = (props) => {
  return <ReactSVG src={props.src} className={props.className} />;
};

export default SVGLoader;
