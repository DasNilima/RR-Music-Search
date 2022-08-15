import { useState } from 'react'

export default function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState("")
    
    let handleSubmit = (event) => {
        event.preventDefault()
        props.handleSearch(searchTerm)
    }
    
    let handleChange = (event) => {
        setSearchTerm(event.target.value)
    }
    return (
            <form onSubmit = {handleSubmit}>
                    <input type="text" value={searchTerm} onChange={handleChange} />
                    <button type="submit">search</button>
                </form>
            )
        }
