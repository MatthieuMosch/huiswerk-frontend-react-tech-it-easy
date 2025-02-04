import './App.css';
// Opdrachten week 1
import countSold from "./helpers/countSold.js";
import countOriginalStock from "./helpers/countOriginalStock.js";
import countToSell from "./helpers/countToSell.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import showInfo from "./helpers/showInfo.js";
import makeEuro from "./helpers/makeEuro.js";
import showDisplaySizes from "./helpers/showDisplaySizes.js";
import showOptions from "./helpers/showOptions.js";
// Opdracht week 2
import showOutcomeInConsole from "./constants/oefenbestand.js";
// import listBrands from "./helpers/listBrands.js";

function App() {
    // in StrictMode App() is run twice causing the console.log() to be shown twice
    // StrictMode is set by default in main.jsx
    // disabled StrictMode for now. If it is required in the future then it can be enabled again in main.jsx
    console.log("tvs sold: " + countSold());
    console.log("tvs on original stock: " + countOriginalStock());

    showOutcomeInConsole();

    return (
        <>
            <header>
                <h1>Begin hier met met maken van de applicatie!</h1>
            </header>
            <main>
                <section className="stock-counts">
                    <p className="tvs-sold">
                        er zijn {countSold()} tvs verkocht
                    </p>
                    <p className="tvs-original-stock">
                        er zijn {countOriginalStock()} tvs ingekocht
                    </p>
                    <p className="tvs-to-sell">
                        er zijn {countToSell()} tvs verkocht
                    </p>
                </section>
                <section className="best-selling-tv">
                    <figure>
                        <img src={bestSellingTv.sourceImg} alt="best selling tv"/>
                    </figure>
                    <figcaption>
                        <p>
                            {showInfo(bestSellingTv)}
                        </p>
                        <p>
                            {makeEuro(bestSellingTv.price)}
                        </p>
                        <p>
                            {showDisplaySizes(bestSellingTv)}
                        </p>
                        <p>
                            {showOptions(bestSellingTv)}
                        </p>
                    </figcaption>
                </section>
                <section>
                    <ul>
                        {/*{listBrands()}*/}
                        {inventory.map((tv) => <li key={tv.type}>{tv.brand}</li>)}
                    </ul>
                </section>
            </main>
            <footer>
                <button type="button" onClick={() => console.log("Meest verkocht eerst")}>Meest verkocht eerst</button>
                <button type="button" onClick={() => console.log("Goedkoopste eerst")}>Goedkoopste eerst</button>
                <button type="button" onClick={() => console.log("Meest geschikt voor sport eerst")}>Meest geschikt voor sport eerst</button>
            </footer>
        </>
    )
}

export default App
