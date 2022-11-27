import React from 'react'

function SearchBook({search,setSearch}) {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor='search'>Search</label>

<input 
id='search'
type="text" 
role='searchBox'
placeholder='Search Books'
value={search}
onChange={ (e)=> setSearch(e.target.value)}

/> 



      
    </form>
  )
}

export default SearchBook
