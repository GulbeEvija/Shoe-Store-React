function Buttons({setAllShoes, dataShop}) {

    const filteredShoes = searchTerm => {
        const filteredResult = [];
        dataShop.forEach(item => {
            item.searchTerm.forEach(term => {
                if (term === searchTerm) {
                    filteredResult.push(item);
                    setAllShoes(filteredResult);
                }
            })
        })
    }

    return (
        <div className="container">
            <div className="buttonContainer">
                <button className="change" onClick={() => setAllShoes(dataShop)}>All shoes</button>
                <button className="change" onClick={() => filteredShoes("trending")}>trending</button>
                <button className="change" onClick={() => filteredShoes("summer")}>summer</button>
                <button className="change" onClick={() => filteredShoes("winter")}>winter</button> 
            </div>

            <div className="buttonContainer">
                <button className="change" onClick={() => filteredShoes("sneakers")}>sneakers</button>
                <button className="change" onClick={() => filteredShoes("heels")}>heels</button>
                <button className="change" onClick={() => filteredShoes("boots")}>boots</button>
                <button className="change" onClick={() => filteredShoes("flats")}>flats</button>
            </div>

            <div className="buttonContainer">
                <button className="change" onClick={() => filteredShoes("red")}>red</button>
                <button className="change" onClick={() => filteredShoes("white")}>white</button>
                <button className="change" onClick={() => filteredShoes("brown")}>brown</button>
                <button className="change" onClick={() => filteredShoes("black")}>black</button>
            </div>

        </div>
    )
}


export default Buttons;
