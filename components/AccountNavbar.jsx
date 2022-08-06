import React from 'react';

import AccountNavbarMobile from './AccountNavbarMobile';
import AccountNavbarResponsive from './AccountNavbarResponsive';

const AccountNavbar=()=>{
    return (
        <>
            <AccountNavbarMobile/>
            <AccountNavbarResponsive/>
        </>
    );
};

export default AccountNavbar;