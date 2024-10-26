import ScrollToTop from "@/base-components/scroll-to-top/Main";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./router";

function App() {
  return (
    <RecoilRoot>
      <HashRouter>
        <Router />
        <ScrollToTop />
      </HashRouter>
    </RecoilRoot>
  );
}

export default App;
