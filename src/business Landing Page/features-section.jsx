import React from 'react';
import { Features } from './features';
import styles from './business.css'
export function FeatureSection(){
    return (
        <div className='feature-container'>
            <Features featureHeader="Software Development" featureDesc="Develop market leading softwares, like Facebook, Twitter, Freaker chat, NanaM and many more"/>
            <Features featureHeader="Blockchain Development" featureDesc="Build amazing DApps, smart contract, NFTS,Tokens and Coins with our amazing Blockchain Development team, get insight into the decentralised world!"/>
              <Features featureHeader="Brand Development" featureDesc="Build a business, with experts from Silicon valley, build a global brand with us"/>
        </div>
    )
}