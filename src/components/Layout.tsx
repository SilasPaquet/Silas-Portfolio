import '../app/globals.css';
import React, {useContext, useEffect} from 'react';
import {useRouter} from "next/router";

type LayoutProps = React.PropsWithChildren<{}>;

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter();


    return (
        <>
        <h1>
            monstre brozer
        </h1>
        {children}
        </>
    );
};

export default Layout;