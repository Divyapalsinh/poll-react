import React from 'react';
import Header from './Header';

const Layout: React.FunctionComponent<any> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default Layout;