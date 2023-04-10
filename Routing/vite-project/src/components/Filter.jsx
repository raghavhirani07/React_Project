import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Filter() {
  const [ search, setserch ] = useSearchParams();
  // console.warn(search.get('age'));
  const age = search.get('age');
  // setserch()
  return (
    <div>Filter
      Age : {age}
      <button onClick={() => setserch({age:15})}>
      update
      </button>
    </div>
  )
}

export default Filter