import { useState } from 'react'

function GalleryItem(props){
    let [view, setView] = useState(false)

    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            <p>Song Title: {props.songTitle}</p>
            <p>Artist: {props.artistName}</p>
        </div>
    )
}

export default GalleryItem
