import React, { ContextType } from "react";
import './App.css'
import { Routes } from "react-router-dom";
import { LoginContext } from "./components/Context/Login/LoginProvider";
import { generateRoutes } from "./routes/routes";
import { ThemeProvider } from "@mui/material/styles";
import { solarisTheme } from "./theme/Theme";


class App extends React.Component {

  static contextType = LoginContext

  context: ContextType<typeof LoginContext>

  render() {
    return (
      <ThemeProvider theme={solarisTheme}>
        <div className='app'>
          <Routes>

            {this.context.state.isLoggedIn ?
              <>
                {
                  generateRoutes("USER")
                }
              </>
              :
              <>
                {
                  generateRoutes("HOME")
                }
              </>
            }

          </Routes>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
