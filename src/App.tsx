import { FOOTERLINK_1, FOOTERLINK_2 } from "./constants";
import FooterRow from "./src/FooterRow";

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
      </div>
    );
  }
  
  export default App;