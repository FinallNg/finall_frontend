import React from 'react'
import MonoConnect from '@mono.co/connect.js';

const DirectDebit = () => {
  const monoConnect = React.useMemo(() => {
    const monoInstance = new MonoConnect({
      key: "test_pk_wWVSgpgY5gztsxPxaCND",
      scope: "payments",
      data: {
        type: "one-time-debit", // one-time-debit || recurring-debit
        amount: 150000, // amount in kobo
        description: "Payment for light bill",
      },
      onSuccess: (chargeObject) => console.log(`charged successfully`, chargeObject),
    })

    monoInstance.setup()
    
    return monoInstance;
  }, [])
  return (
    <div>
      <button onClick={() => monoConnect.open()}>
        Pay with Mono
      </button>
    </div>
  )
}

export default DirectDebit;