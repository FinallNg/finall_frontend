import React from 'react'
import MonoConnect from '@mono.co/connect.js';

const Reauthorisation = () => {

  const monoConnect = React.useMemo(() => {
    const monoInstance = new MonoConnect({
      key: "test_pk_wWVSgpgY5gztsxPxaCND",
      onSuccess: ({ code }) => console.log(`Linked successfully: ${code}`),
    })
    
    return monoInstance;
  }, [])

  function reauthoriseAccount() {
    const reauth_token = "code_xyzUi8olavk";
    monoConnect.reauthorise(reauth_token);
    monoConnect.open();
  }

  return (
    <div>
      <button onClick={() => reauthoriseAccount()}>
        Reauthorise user account
      </button>
    </div>
  )
}

export default Reauthorisation;
