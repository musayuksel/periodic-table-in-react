import { useState, useEffect } from "react"
import './GridContainer.css'
import Element from './ElementTile'
import TableLegend from './TableLegend'

function GridContainer() {

    const [elements, setElements] = useState([])

    useEffect(() => {
        async function fetchData () {
            const url = "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json"

            try {
                const response = await fetch(url)
                if(!response.ok) {
                    throw new Error(`Ooops!: ${response.status}`)
                }

                const data = await response.json()
                setElements(data.elements)
            } catch(err) {
                console.error(err)
            }
        }
        fetchData()
        console.log(elements)
    }, [])

    return (
        <main className="grid-container">
            {elements
                .map((element, i) => 
                    <Element 
                        symbol={element.symbol} 
                        key={`elementTile${i}`} 
                        number={element.number}
                        xpos={element.xpos}
                        ypos={element.ypos + 2}
                        hexClr={element["cpk-hex"]}
                        category={element.category}
                    />
            )}

            <TableLegend elements={elements}/>
        </main>
    )
}

export default GridContainer