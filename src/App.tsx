import {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import * as d3 from 'd3'


function App() {
    const [count, setCount] = useState(0)
    const svg = d3.select("body").append("svg").attr("width", 300).attr("height", 200)
    const data = [1, 2, 3, 6, 4]
    useEffect(()=>{
        svg
            .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("width", 20)
            .attr("height", 20)
            .attr("fill", "orange")
            .attr("x",(d)=>d*30 )
            .attr("y",(d)=>d*30 )
    },[])

    return (
        <>

        </>
    )
}

export default App
