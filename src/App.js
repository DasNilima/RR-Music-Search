import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

useEffect(() => {
    if (search)
      fetch(`https://itunes.apple.com/search?term=${search}`)
        .then(response => response.json())
        .then(responseData => {
      if (responseData.resultCount > 0) {
          setData(responseData.results)
        }
        else {
          setMessage("Not found")
        }
        });
}, [search])

return (
        <div>
        <SearchBar handleSearch={setSearch} />
            {message}
    <Gallery data={data} />
        </div>
    )
}

export default App


