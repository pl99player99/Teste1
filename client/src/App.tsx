import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import Especialidades from "./pages/Especialidades";
import Sobre from "./pages/Sobre";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/especialidades" component={Especialidades} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/contacto" component={Contacto} />
    </Switch>
  );
}

export default App;
