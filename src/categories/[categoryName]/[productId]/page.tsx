import React from 'react'

export default function CategoryProducts(props:any) {
    console.log(props);
    
    const color = props.searchParams.color;
    
  return (
    <div>Category Products
      {color}
    </div>

  )
}
