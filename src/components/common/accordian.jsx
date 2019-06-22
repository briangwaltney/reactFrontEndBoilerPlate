import React from 'react';

const Accordian = ({ data, openFirst }) => {
  return (
    <div className=" w-100" id="accordionExample">
      {data.map((item, index) => (
        <div className="card mb-2 border-primary" key={index}>
          <div className="card-header bg-primary" id={'heading' + index}>
            <button className="btn btn-lg btn-block bg-white text-primary" data-toggle="collapse" data-target={"#collapse" + index} aria-expanded="true" aria-controls={"collapse" + index}>
              {item.title}
            </button>
          </div>
          <div id={"collapse" + index} className={'collapse' + (index === 0 && openFirst ? ' show' : '')} aria-labelledby={"heading" + index} data-parent="#accordionExample">

            <div className="card-body ">
              {item.body}
            </div>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
}

export default Accordian;