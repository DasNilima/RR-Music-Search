import { useContext } from 'react'
import GalleryItem from './GalleryItem'
import { DataContext } from '../context/DataContext'

const Gallery = function () {
    let dataContext = useContext(DataContext)
    let galleryItems = dataContext.map ((song, i ) => {
        return <GalleryItem key={i} item={song} />
    })
    return (
        <div>
            {galleryItems}
        </div>
    )
}
export default Gallery

