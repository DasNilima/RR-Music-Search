import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
const axios = require('axios').default;

function ArtistView() {
    const navigate = useNavigate()
    const { artistId } = useParams()
    const [ artistData, setArtistData ] = useState([])

    useEffect(() => {
        setTimeout(() => {
            axios.baseURL = 'https://itunes.apple.com'
            axios.get(`/lookup?id=${artistId}&entity=album`)
                .then((response) => {
                    setArtistData(response.data.results)
                })
        }, 3000);
    },[artistId])

    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')
    let renderAlbums = justAlbums.map(album => {
        return <div><Link to={`/album/${album.collectionId}`}>{album.collectionName}</Link></div>
    })
    
    return (
        <div>
            <h2>The id passed was: {artistId}</h2>
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading...</h2>}
            {renderAlbums}
            <button onClick={() => navigate(-1)}>back</button>
            <button onClick={() => navigate('/')}>home</button>
        </div>
    )
}

export default ArtistView