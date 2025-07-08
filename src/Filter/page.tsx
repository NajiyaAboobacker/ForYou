import React from 'react'

export default function Filter(props:any) {
  
  const search = props.searchParams.pricelimit;
  console.log(props);
  return (
    <div>Filter
    {search}
    </div>
  )
}
