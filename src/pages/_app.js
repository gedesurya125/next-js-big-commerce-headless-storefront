import "@/styles/globals.css";

import { ThemeProvider } from "theme-ui";
import theme from "@/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {/* <ApolloProvider client={apolloClient}> */}

      <Component {...pageProps} />

      {/* </ApolloProvider> */}
    </ThemeProvider>
  );
}
