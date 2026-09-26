
function SearchBar() {
  // This is for the search bar component.
  const printSearchedName = () => {
    console.log("Hello Superheroes!");
  }

  return(
    <>
      <div>
        <input type="text" placeholder="Search Superhero..."/>
        <button type="button" onClick={printSearchedName}>Search</button>
      </div>
    </>
  )
}

export default SearchBar