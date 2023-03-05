const StyleGridItem = (props) => {

}

const StyleGrid = (props) => {
    const styles = {
        grid: {
            display: "grid",
            gridTemplateColumns: "2"
        };
    }
    return (
        <div style={styles.grid}>

        </div>
    )
}

module.exports = { StyleGridItem, StyleGrid };