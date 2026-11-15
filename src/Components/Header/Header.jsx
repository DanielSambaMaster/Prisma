import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import prismalogo from '../../Assets/prismalogo.png'
import User from './User'
export default function Header() {
    return (
        <div className="header">

        <div className="prismaLogo"><img src={prismalogo} alt="Prisma Logo" className="header-logo" /></div>
        <div></div>
        <div className="header-notification">
           <div> <FontAwesomeIcon icon={faBell} className="header-icon" /></div>
            <div><User/></div>
        </div>
        </div>
    )
}