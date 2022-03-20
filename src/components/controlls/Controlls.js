import React from 'react'
import Home from '../../img/house-chimney-solid.svg'
import User from '../../img/user-solid.svg'
import Briefcase from '../../img/briefcase-solid.svg'
import Newspaper from '../../img/newspaper-solid.svg'
import Envelope from '../../img/envelope-open-solid.svg'
const Controlls = () => {
	return (
    <div className="controlls">
			Controlls
      {/* .control.control-$.active-btn*5 */}
      <div className="control control-1 active-btn">
        <img src={Home} alt="" />
      </div>
      <div className="control control-2  " data-id="about">
        <img src={User} alt="" />
      </div>
      <div className="control control-3 " data-id="portfolio">
        <img src={Briefcase} alt="" />
      </div>
      <div className="control control-4 " data-id="blogs">
        <img src={Newspaper} alt="" />
      </div>
      <div className="control control-5 " data-id="contact">
        <img src={Envelope} alt="" />
      </div>
    </div>
  );
}

export default Controlls