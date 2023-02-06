
import React, { useContext } from
    'react'
// import { TransactionContext } from '../TransactionContext';

const TransactionCard = (addresssTo, addressFrom, timeStamp, message, amount url) => {
    return (
        <div className=' bg-[#181918] m-4 flex flex-1
        2x1:min-w-[450px]
        2x1:max-w-[550px]
        2x1:min-w-[450px]
        2x1:max-w-[550px]

        '>

        </div>
    )
}


const Transactions = () => {
    // const { currentAccount } = useContext(TransactionContext)
    return (
        <div className=' flex w-full justify-center items-center 2xl:px-20'>
            <div className=' flex  flex-col md:p-12 py-12 px-4'>
                {"currentAccount" ? (
                    <h3 className=' text-white text-3xl  text-center my-2'>Latest Transaction</h3>
                ) : (
                    <h3 className=' text-white text-3xl  text-center my-2'> Connect your account to see the transactions</h3>

                )
                }

            </div>

        </div>
    )

}
export default Transactions