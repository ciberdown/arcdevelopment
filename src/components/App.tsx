import "../../src/App.css";
import NavBar from "./header/navBar";
import theme from "./UI/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { cacheRtl } from "./UI/functions";
import { Slider } from "@mui/material";
function App() {
  console.log(theme)
  const sliderHandle = (e: any)=>{
    console.log(e.target.value)
  }
  return (
    <CacheProvider value={cacheRtl} >
      <ThemeProvider theme={theme}>
        <Slider sx={{m:10, width:200}} color= {}  onChange={sliderHandle}/>
        <NavBar>
          <></>
        </NavBar>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
