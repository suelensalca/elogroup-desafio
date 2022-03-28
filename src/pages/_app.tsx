import { AppProps } from "next/app";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Header from "../components/Header";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Component {...pageProps} />
    </DndProvider>
  );
}

export default MyApp;
