import React from 'react';
import Header from './Components/Header';
import Slideshow from './Components/Slide';
import Label from './Components/Label';
import News_block from './Components/News_block';
import Catalogue from './Components/Catalogue';
import Footer from './Components/Footer';
import NewCatalog from './Components/NewCatalog';
import Cart from './Components/Cart';
import Confirm from './Components/Confirm'; 
import Style from './Styles/app.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
/*import Slide_container from './Components/Slide_container';
import Head_menu from './Components/Head_menu'*/        

const from_news_top_object =  '400px';
const from_catal_top_object =  '1000px';


function App(){
  return (
      <div style = {{width:'90%', position:'relative', left:'50%', transform: 'translate(-50%)'}}>
        <Router>
          <div className = { Style.flex_container }>
            <div className = {Style.flex_container_nest}>
              <Header />
              <Route path="/" exact = {true} strict = {true}>
              <Slideshow />
              <Label  label = 'Новости' top = { from_news_top_object } />
              <News_block></News_block>
              <Label  label = 'Каталог' top = { from_catal_top_object } />
              <NewCatalog></NewCatalog>
              </Route>
              <Route path='/about' exact = {true} strict = {true}>
                <div>About</div>
              </Route>
              <Route path='/cat' exact = {true} strict = {true}>
                <div>Catalogue</div>
              </Route>
              <Route path='/cart' exact = {true} strict = {true}>
                <Cart></Cart>
              </Route>
              <Route path='/conf' exact = {true} strict = {true}>
                <Confirm></Confirm>
              </Route>
              <Route path='/contact' exact = {true} strict = {true}>
                <div>Contact</div>
              </Route>
          </div>
          </div>
              <Footer className = { Style.flex_footer } />
        </Router>
      </div>);
}

export default App;
