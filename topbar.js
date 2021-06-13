const Topbar = () => {
    return ( 
        <div className = "topbar">
       
        <h1 className="headed">EDYODA<p className="pstory">Stories</p></h1>
        <select className="options">
           <option disabled  selected hidden>Explore Categories</option>
          <option className="item">Artificial Intelligence</option>
          <option className="item">Cloud Computing</option>
          <option className="item">DevOps</option>
          <option className="item">Programming Languages</option>
          <option className="item">Mobile Application Development</option>
          <option className="item">Technology and Tools</option>
        </select>
        <p className = "patged">EdYoda is free learning and knowledge <br/>sharing platform for techies</p>
        <button className = "btn">Go To Main Website </button>
       
     </div>

     );
}
 
export default Topbar;