// const contractAbi = "0xd9145CCE52D386f254917e481eB44e9943F39138";

import React, { useState } from 'react'
import Erc20 from './Erc20.json';
import Web3 from 'web3';

const ERC20 = () => {


    const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
    const abi = Erc20.abi;
    const { ethereum } = window;

    const [err, setErr] = useState('');
    // const [acc, setAcc] = useState(' connected');
    // const contract = await new Web3.eth.Contract(abi, contractAddress);
    const connect = async () => {


        if (window.ethereum && window.ethereum.isMetaMask) {
            console.log("MetaMask Here!");

            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((result) => {
                    console.log("lllllllllllllll", result);

                })
                .catch((error) => {
                    setErr(error.message);
                });
        } else {
            console.log("Need to install MetaMask");
            setErr("Please install MetaMask browser extension to interact");
        }
    }


    return (
        <section>
            {/* <h1> connecting ERC20 using web3</h1>
            <div>
                <button onClick={connect} >Connect</button>
            </div> */}
            {/* {acc && <div>
                <h1>Address:{acc}</h1>
            </div>} */}
            <button onClick={connect}>Connect</button>
        </section>

    )

}
export default ERC20;