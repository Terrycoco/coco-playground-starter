const styles = {
    grid: {
        display: "grid",
        gridTemplateColumns: "30% 70%"
    }
};



const StyleGridItem = (props) => {
    return (

    )
}

const StyleGrid = (props) => {
   
    return (
        <div style={styles.grid}>
            {props.children}
        </div>
    )
}

module.exports = { StyleGridItem, StyleGrid };