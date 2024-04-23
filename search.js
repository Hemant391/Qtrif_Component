import './search.css'

export default function Search(){
    return (
        <>
        <div className="boxsearch">
        <input className="searchbar" type="text" placeholder="Search a song of your choice" />
        <div className="sidebox">
            {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
            </div>

        </div>
        </>
    )
}