import React, { useState, useEffect } from 'react';
// import { Link } from '@reach/router';

import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect';

import CeramicClient from '@ceramicnetwork/http-client';

const API_URL = 'https://ceramic-clay.3boxlabs.com';
const ceramic = new CeramicClient(API_URL);

function Account() {
  const [web3Available, setWeb3Available] = useState(false);
  useEffect(() => {
    setWeb3Available(!!window.ethereum);
  }, [window.ethereum]);
  async function enable() {
    // enable metamask
    const addresses = await window.ethereum.enable();

    // get auth provider
    const threeIdConnect = new ThreeIdConnect();
    const authProvider = new EthereumAuthProvider(
      window.ethereum,
      addresses[0]
    );
    await threeIdConnect.connect(authProvider);
    console.log('connected', authProvider);
    
    
    const provider = await threeIdConnect.getDidProvider();
    console.log('provider', provider);

    
    await ceramic.setDIDProvider(provider);
  }

  return (
    <div className='page-container skew-padding'>
      <div className='container'>
        <h1>Account</h1>

        <h2>Connect Account</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta a
          alias voluptatum, illo odit id expedita nihil omnis rerum. Quos
          sapiente sint corporis autem in, quasi reiciendis nam? Quibusdam,
          porro?
        </p>
        <button disabled={!web3Available} onClick={enable}>
          Connect
        </button>
      </div>
    </div>
  );
}

export default Account;
