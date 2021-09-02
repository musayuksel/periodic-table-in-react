import './LegendItem.css'
import setCSSBackground from './setCSSBackground'

function LegendItem({category}) {
    return (
        <div 
            className="legend-item"
        >
            <div 
                className="legend-item-swatch"
                style={{backgroundColor: `var(${
                    setCSSBackground(category)})`
                }}></div>
            <p className="legend-item-text">{category}</p>
        </div>
    )
}

export default LegendItem