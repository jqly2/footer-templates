import { FOOTERLINK_1 } from "./constants";
import Footer from "./src/FooterRow";
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
        <Footer css=""/>
        <hr />
        <FooterCol urls={FOOTERLINK_1} />
      </div>
    );
  }
  
  export default App;