const Search = ({search, setSearch}) => {
    return (
        <div className="Search">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar..."/>
        </div>
    )
}

export default Search;