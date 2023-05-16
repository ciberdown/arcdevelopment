import "../../src/App.css";
import NavBar from "./header/navBar";
import theme from "./UI/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { cacheRtl } from "./UI/functions";
function App() {
  console.log(theme)

  return (
    <CacheProvider value={cacheRtl} >
      <ThemeProvider theme={theme}>
        <NavBar>
          <></>
        </NavBar>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
