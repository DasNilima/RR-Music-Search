import { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'

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
      {message}
      <Router>
        <Routes>
            <Route path="/" element={
              <Fragment>
                <SearchBar handleSearch={setSearch} />
                <Gallery songs={data} />
              </Fragment>
              }/>
            <Route path="/album/:id" element={<AlbumView />} />
            <Route path="/artist/:id" element={<ArtistView />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App


