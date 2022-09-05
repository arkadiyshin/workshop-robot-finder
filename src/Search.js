import './App.css';

function Search(props) {
    
    const {search, setSearch} = props;

    return (
        <div >
            <input className='search' type="text" placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
    
}

export default Search;