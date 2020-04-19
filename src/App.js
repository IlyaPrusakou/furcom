import React from 'react';
import Header from './Components/Header';
import Slideshow from './Components/Slide';
import Label from './Components/Label';
import News_block from './Components/News_block';
import Catalogue from './Components/Catalogue';
import Footer from './Components/Footer';
import NewCatalog from './Components/NewCatalog'; 
import Style from './Styles/app.module.css';
/*import Slide_container from './Components/Slide_container';
import Head_menu from './Components/Head_menu'*/        

const from_news_top_object =  '400px';
const from_catal_top_object =  '1000px';


function App(){
  return (
      <div style = {{width:'90%', position:'relative', left:'50%', transform: 'translate(-50%)'}}>
          <div className = { Style.flex_container }>
            <div className = {Style.flex_container_nest}>
              <Header />
              <Slideshow />
              <Label  label = 'Новости' top = { from_news_top_object } />
              <News_block></News_block>
              <Label  label = 'Каталог' top = { from_catal_top_object } />
              {/* <Catalogue /> */}
              <NewCatalog></NewCatalog>
          </div>
          </div>
              <Footer className = { Style.flex_footer } />
      </div>);
}

export default App;
