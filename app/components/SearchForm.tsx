import React from 'react'
import Form from "next/form"
import SearchFormReset from './SearchFormReset'

const SearchForm = ({ query }:{query?:string}) => {

  return (
    <Form action="/" scroll={false} className='search-form'>
    <input
    type="text"
    name="query"
    defaultValue={query}
    className='search-input'
    placeholder="Search for projects"
    />
    <div className='flex gap-2'></div>
    {query && <SearchFormReset/>}
<button type="submit" className="search-btn text-white">Search</button>
    </Form>
  )
}

export default SearchForm
