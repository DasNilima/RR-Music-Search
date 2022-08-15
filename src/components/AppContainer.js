import Gallery from './Gallery'
import SearchBar from './SearchBar'
import { SearchContext } from '../context/SearchContext'
import { DataContext } from '../context/DataContext'

const AppContainer = function(props) {
return (
    <div>
        <SearchContext.Provider value={{
        term: props.searchInput,
        handleSearch: props.handleSearch
        }}>
        <SearchBar />
        </SearchContext.Provider>
        <DataContext.Provider value={props.data}>
        <Gallery />
        </DataContext.Provider>
    </div>
)}
export default AppContainer