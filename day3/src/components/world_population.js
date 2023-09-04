import React from "react";
import { tenHighestPopulation } from "../ten_most_highest_populations";

export const WorldPopulation = ()=>{
    const maxPopulation = Math.max(...tenHighestPopulation.map(item => item.population));
    const BarPlot = ({country, population})=>(
        <div className="country-bar-plot">
            <div className="country-bar-plot-name">{country.toUpperCase()}</div>
            <div className="country-bar-plot-bar-wrapper">
                <div className="country-bar-plot-bar"
                style={{width: `${population/maxPopulation*100}%`}}></div>
                </div>
            <div className="country-bar-plot-population">{population.toLocaleString()}</div>
        </div>
    )

    const BarChart = ({props})=>(
        props.map((props)=><BarPlot country={props.country} population={props.population}/>)
    )

    return(
        <div className="world-population-wrapper">
            <div className="world-population-container">
                <h1>30 Days of React</h1>
                <h2>World Population</h2>
                <h3>Ten most populated countries</h3>
                <div className="world-population-barchart">
                <BarChart props= {tenHighestPopulation}/>
                </div>

            </div>

        </div>

    )
}