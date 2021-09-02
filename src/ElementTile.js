import './ElementTile.css'
import setCSSBackground from './setCSSBackground'

function ElementTile({ 
    symbol, 
    number, 
    xpos, 
    ypos, 
    hexClr,
    category
}) {
        return (
        <div 
            className="element-tile"
            style={{
                gridColumn: xpos,
                gridRow: ypos,
                backgroundColor: `var(${
                    setCSSBackground(category)
                })`
            }}
        >
            <p>{number}</p>
            <p>{symbol}</p>
        </div>
    )
}

export default ElementTile