import './App.css';
import {filterdata, blogsdata} from "./components/filterdata";
import Topbar from "./components/topbar";
import Filter from "./components/filterpart.js";
function App() {
 
 const filtercontent = filterdata
 const blogscontent = blogsdata
  return (
    <div className="App">
        <Topbar/>
        <Filter data = {filtercontent}/>

        <div class="blogs">
            {blogscontent.map(({small_image,title,authorname,posted_on,description}) =>
            (
              <div className="card">
              <img className = "cardimage" src={small_image}/>
              <h3 className= "cardtitle">{title}</h3>
              <p className="cardauthor">{authorname}</p>
              <p className = "cardesc">{description}</p>
              </div>
            )


            )}
              
          
        </div>
       



</div>
  );
}

export default App;