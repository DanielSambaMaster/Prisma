import prismalogo from '../../Assets/isptec.png'

export default function User(){

    return(
        <div className="hubUser">
            <div className="userLogo"><img src={prismalogo} alt="Prisma Logo" className="userLogo" /></div>
            <div className='username'>Daniel Samba</div>
        </div>
    )
}