import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { getStarknet } from "@argent/get-starknet";
import { Contract, number, shortString } from "starknet"
import registerContractAbi from "../../starknet/contracts/abis/registerContract";
import { connectStarknet } from "../../../components/starknet";
import Account from '../account/Account';
import { useRouter } from "next/router";
import Link from "next/link";

function Navbar() {
    const router = useRouter();

    return (
        <div className='navbar' style={{ justifyContent: router.pathname == '/' ? 'flex-end' : 'space-between' }}>
            {router.pathname != '/' &&
            <div className='navbarNavigation'>
                <Link href="/">
                    <img
                        src={'./assets/mainAssets/ExothiumLogo.svg'}
                        alt="NavBarLogo"
                        className="navbarLogo"
                    />
                </Link>
                <h1 className='navbarTitle'>
                    {router.pathname.substring(1)}
                </h1>
            </div>
            }
            <Account/>
        </div>
    );
}

export default Navbar;