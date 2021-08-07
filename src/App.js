
import './App.css';
import Aside from "./sitioweb/Aside";
import Card from "./sitioweb/Card";
import Carrusel from "./sitioweb/Carrusel";
import Header from "./sitioweb/Header";
import Mapa from "./sitioweb/Mapa";
import Menu from "./sitioweb/Menu";
import Pie from "./sitioweb/Pie";
import Video from "./sitioweb/Video";

function App() {
  return (

    <div className="container">
      <header className="row bg-primary">
        <Header/>
      </header>


      <nav className="row bg-primary" >
        <Menu/>
      </nav>
      <hr ></hr>

      <section className="row bg-primary justify-content-center align-items-center"> 
        <article className="col-md-6 bg-primary " > 
          <Carrusel/>
        </article>
        
        <article className="col-md-3 d-flex justify-content-center bg-primary">
          <Card/>
        </article>

        <aside className="col-md-3 bg-primary">
          <Aside/>
        </aside>
      </section>

      <section className="row bg-dark text-light bg-primary">
        <article className="col-md-5 justify-content-center bg-primary ">
          <Mapa/>
        </article>

        <article className="col-md-7 d-flex justify-content-center align-items-center bg-primary">
          <Video/>
        </article>
      </section>

      <footer className="row bg-dark d-flex justify-content-center align-items-center text-light" style={{height:'120px'}}>
        <Pie/>
      </footer>
    </div>
  );
}

export default App;
