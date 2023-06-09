import "../../src/App.css";
import NavBar from "./header/appBar";
import theme from "./UI/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { cacheRtl } from "./UI/functions";
import MyRouter from "./body/myRouter";
function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <NavBar />
        <MyRouter />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
