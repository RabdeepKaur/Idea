
import React from 'react'
import Form from "next/form"
import SearchFormReset from './SearchFormReset'

const SearchForm = ({ query }:{query?:string}) => {
  return (
    <div className="flex justify-center w-full">
      <Form action="/discover/project" scroll={false} className='search-form flex items-center w-full max-w-md'>
        <input
          type="text"
          name="query"
          defaultValue={query}
          className='search-input flex-grow px-4 py-2 rounded-l'
          placeholder="Search for projects"
        />
        <div className='flex gap-2'>
          {query && <SearchFormReset/>}
          <button type="submit" className="search-btn text-white px-4 py-2 rounded-r">Search</button>
        </div>
      </Form>
    </div>
  )
}

export default SearchForm
