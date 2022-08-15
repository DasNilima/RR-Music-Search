import GalleryItem from './GalleryItem'

const Gallery = function(props) {
    let galleryItems = props.songs.map ((song, i ) => {
        return <GalleryItem key={i} item= {song}  />
    })
    return (
        <div>
            {galleryItems}
        </div>
    )
}
export default Gallery

