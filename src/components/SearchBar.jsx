import { useState } from 'react'

const SearchBar = function(props) {
    let [searchTerm, setSearchTerm] = useState("")
    
    let handleSubmit = (event) => {
        event.preventDefault()
        props.handleSearch(searchTerm)
    }
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        <button type='submit'>Search</button>
    </form>
)   
}

export default SearchBar
