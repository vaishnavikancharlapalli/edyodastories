import React from 'react';
const Filter = (props) => {
    const filtercontent = props.data
    return (<div className = "filterpart">
    <span class="filter"><i class="fas fa-filter"></i><span className="filtertext">Filter By Category</span></span>
    <div className = "filterspace">
      {filtercontent.map(({title,id}) =>
       (
         <button key={id} className = "filterbtn">{title}</button>
      ))}
    </div>

  </div>);
}
 
export default Filter;