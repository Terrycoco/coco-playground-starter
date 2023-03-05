import { useTheme } from "@/dev/hooks";

const Notepaper = (props) => {
  const styles = {
    paper: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#0000E0",
    },
    lines: {
        width: '100%',
        borderBottom: "1px solid lightblue"
    }
  };

  const getLines = () => {
    for (const i =0; i < 20; i++ ) {
        <div 
    }
  }

  return  (
    <div style={styles}>
      {getLines()}
    </div>
  );
};

export default Notepaper;
