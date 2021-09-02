import './TableLegend.css'
import LegendItem from './LegendItem'
import setCSSBackground from './setCSSBackground'

function TableLegend({elements}) {
    const categories = 
    [...new Set(
        elements.map(element => element.category)
    )]
    .filter(category => !category.includes("unknown"))
    
    return (

        <div className="table-legend">
            { 
                categories.map((category , i) => 
                    <LegendItem
                        key={`legendItem${i}`}
                        category={category} 
                    />
                )
            }
        </div>
    )
} 

export default TableLegend