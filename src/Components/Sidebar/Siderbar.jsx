import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHouse,faPiggyBank, faBars, faGear, faStar, faCreditCard, faUserGraduate, faDownload, faHandPointUp } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar () {    


    return (
        <div className="sidebar">

              <div className="sidebar-content">
            <div><FontAwesomeIcon icon={faUserGraduate} className="sidebar-icon" /></div>
           <div className='sidebarText'>Home</div>
            </div>


              <div className="sidebar-content">
                <div><FontAwesomeIcon icon={faDownload} className="sidebar-icon" /> </div>
                <div className='sidebarText'>Materials</div>
            </div>


            <div className="sidebar-content">
<div><FontAwesomeIcon icon={faHandPointUp} className="sidebar-icon" /></div>
          <div className='sidebarText'> Requests</div>
            </div>


            <div className="sidebar-content">
                <div>       <FontAwesomeIcon icon={faPiggyBank} className="sidebar-icon" /></div>
                <div className='sidebarText'>Finance</div>
            </div>

           
            
            <div className="sidebar-content">
            <div>           <FontAwesomeIcon icon={faGear} className="sidebar-icon" /></div>
                <div className='sidebarText'>Settings</div>
            </div>
        
        </div>
    )
}