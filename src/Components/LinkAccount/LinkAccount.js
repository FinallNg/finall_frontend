import React from 'react'
import './LinkAccount.css'
import MonoConnect from '@mono.co/connect.js';

const LinkAccount = () => {

    const monoConnect = React.useMemo(() => {
        const monoInstance = new MonoConnect({
          onClose: () => console.log('Widget closed'),
          onLoad: () => console.log('Widget loaded successfully'),
          onSuccess: ({ code }) => console.log(`Linked successfully: ${code}`),
          key: "test_pk_wWVSgpgY5gztsxPxaCND"
        })
    
        monoInstance.setup()
        
        return monoInstance;
      }, [])

  return (
    <div className = 'apibutton'>
      <button onClick={() => monoConnect.open()}>
        Connect your bank accounts
      </button>
    </div>
  )
}

export default LinkAccount;
