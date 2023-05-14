import "../../src/App.css";
import NavBar from "./header/navBar";

function description(): string {
  return [...new Array(50)]
    .map(
      () =>
        `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
    )
    .join("\n");
}
function App() {
  return (
    <div className="App">
      <NavBar description={description}><></></NavBar>
    </div>
  );
}

export default App;
