import React from 'react'
import './Header.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';

function Header() {
    return (
        <div className='header'>
            <div>
            Marvellous Nwachukwu
            </div>
            <div>
        Fashion Designer!!
            </div>
            <div>
                CEO at Bumar-Apparels!!
            </div>
            <div>
         <div className='twitter'>
         <TwitterIcon/>
         </div>
         <div className='language'>
             <LanguageIcon/>
         </div>

            </div>
        </div>
    )
}

export default Header
