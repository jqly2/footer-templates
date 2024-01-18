import { FOOTERLINK_1, FOOTERLINK_2 } from "./constants";
import FooterRow from "./src/FooterRow";
import FooterCol from "./src/FooterCol";

function App() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>
                New App
            </h1>
            <p>
                Edit @ <code>src/App.tsx</code> 
            </p>
        </header>
        <FooterRow urls={FOOTERLINK_2} />
        <hr />
        <FooterCol urls={FOOTERLINK_1} />
      </div>
    );
  }
  
  export default App;