import ReactDOM from "react-dom/client"
import App from "./App"
import { ChakraProvider } from "@chakra-ui/react"
import "./index.css"
import { ColorModeScript } from "@chakra-ui/react"
import theme from "./theme"
import * as React from "react"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
)