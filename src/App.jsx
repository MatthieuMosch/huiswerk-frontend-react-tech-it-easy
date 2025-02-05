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
import checkIcon from "./assets/check.png";
import nocheckIcon from "./assets/minus.png";
import soldoutIcon from "./assets/out-of-stock.png";

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
                        <p>{showInfo(bestSellingTv)}</p>
                        <p>{makeEuro(bestSellingTv.price)}</p>
                        <p>{showDisplaySizes(bestSellingTv)}</p>
                        <p>{showOptions(bestSellingTv)}</p>
                    </figcaption>
                </section>
                <section className="sorting-buttons">
                    <button type="button" onClick={() => {
                        console.log("opdracht 3a - meest verkocht eerst");
                        inventory.sort((a,b) => b.sold - a.sold);
                        console.log(inventory);
                    }}>Meest verkocht eerst</button>
                    <button type="button" onClick={() => {
                        console.log("opdracht 3b - goedkoopste eerst");
                        inventory.sort((a,b) => a.price - b.price);
                        console.log(inventory);
                    }}>Goedkoopste eerst</button>
                    <button type="button" onClick={() => {
                        console.log("opdracht 3c - meest geschikt voor sport eerst");
                        inventory.sort((a,b) => b.refreshRate - a.refreshRate);
                        console.log(inventory);
                    }}>Meest geschikt voor sport eerst</button>
                    <button type="button" onClick={() => {
                        console.log("opdracht bonus-1 - grootste schermgrootte eerst");
                        //this only works when the available sizes array is already sorted from low to high in the database
                        //in this case invertory.availabeSizes is sorted
                        //if the available sizes array is not sorted then the sort would contain a fori loop
                        //to find the max size for a and b and compare those
                        inventory.sort((a,b) => b.availableSizes[b.availableSizes.length-1] - a.availableSizes[a.availableSizes.length-1]);
                        console.log(inventory);
                    }}>Grootste schermgrootte eerst</button>
                </section>
                <section>
                    <ul>
                        {/*{listBrands()}*/}
                        {inventory.map((tv) => {
                            return <li key={tv.type}>
                                {tv.brand}
                                <figure>
                                    <img key={tv.type}
                                         src={(tv.sold === tv.originalStock ?
                                             soldoutIcon :
                                             tv.sourceImg
                                         )}
                                         alt={tv.name}/>
                                </figure>
                                <figcaption>
                                    <p>{showInfo(tv)}</p>
                                    <p>{makeEuro(tv.price)}</p>
                                    <p>{showDisplaySizes(tv)}</p>
                                    <p>{tv.options.map((option) =>
                                            <><img key={option.name}
                                                src={(option.applicable ?
                                                    checkIcon :
                                                    nocheckIcon)}
                                                alt={option.applicable.toString()}
                                                className="option-icon"/> {option.name} </>
                                        )}
                                    </p>
                                </figcaption>
                            </li>
                        })};
                    </ul>
                </section>
            </main>
            <footer>
                <h3>een leuke footer tekst of logo</h3>
            </footer>
        </>
    )
}

export default App
