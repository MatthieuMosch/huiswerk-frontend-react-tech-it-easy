import './App.css';
import countSold from "./helpers/countSold.js";
import countOriginalStock from "./helpers/countOriginalStock.js";
import countToSell from "./helpers/countToSell.js";
import {bestSellingTv} from "./constants/inventory.js";
import showInfo from "./helpers/showInfo.js";
import makeEuro from "./helpers/makeEuro.js";
import showDisplaySizes from "./helpers/showDisplaySizes.js";

function App() {
    // in StrictMode App() is run twice causing the console.log() to be shown twice
    // StrictMode is set by default in main.jsx
    // disabled StrictMode for now. If it is required in the future then it can be enabled again in main.jsx
    console.log("tvs sold: " + countSold());
    console.log("tvs on original stock: " + countOriginalStock());

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
                    <p>
                        de best verkopende tv is: {showInfo(bestSellingTv)};
                    </p>
                    <p>
                        de prijs is: {makeEuro(bestSellingTv.price)};
                    </p>
                    <p>
                        beschikbare schermgroottes: {showDisplaySizes(bestSellingTv)};
                    </p>
                </section>
            </main>
            <footer></footer>
        </>
    )
}

export default App
