import React from 'react';

export type TUseLeftSideBar = {
    logOut: () => void,
    changeLanguage: (lng: string) => Promise<void>
    toggleLeftSideBar: () => void,
    isLeftSideBar: boolean,
}

export type TLayout = {
    children: React.ReactElement | React.ReactNode
}
