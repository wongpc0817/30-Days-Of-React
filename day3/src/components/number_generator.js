import React from "react";

export const NumberGenerator = ()=>{
    const numbers = Array.from({length:32},(v,k)=>k);
    const IsEven = (number)=> number%2===0?'rgba(5, 195, 90, 0.774)':'rgba(246, 188, 13, 0.732)';
    const IsPrime = (number)=>{
      if(number===0){return 'rgba(5, 195, 90, 0.774)'}
      if(number===1){return 'rgba(246, 188, 13, 0.732)'}
      for(let i=2;i<=number/2;i++){
        if(number%i===0){
          return IsEven(number)
        }
      }
      return 'rgb(247, 70, 94)'
    }
    const BlockGenerator=({number})=>{
      const block_color= IsPrime(number);
      return(
        <div className='number-generator-block'
        style={{backgroundColor:block_color}}>
          {number}
        </div>
      )
    }
    const GridGenerator=({numbers})=>numbers.map((number)=><BlockGenerator number={number}/>)
    return(
      <div className='number-generator-wrapper'>
        <h1 className='number-generator-title'>30 Days of React</h1>
        <h2 className='number-generator-subheading'>Number Generator</h2>
        <div className='number-generator-container'>
          <GridGenerator numbers={numbers}/>
        </div>
      </div>
  
    )
  }