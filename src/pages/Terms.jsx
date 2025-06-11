import React from 'react'

const Terms = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
                <h1 className='text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500'>
                    Terms and Conditions
                </h1>
                <div className='w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto mb-8'></div>
            </div>
            <div className='space-y-8 mb-16'>
                <div className='bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300'>
                    <p className='text-lg leading-relaxed'>
                        By using Movies4u, you agree to these terms. You must be 18 or older to create an account. Keep your login details safe. Movies and shows are for personal viewing only - no downloading or sharing. Pay monthly or yearly, cancel anytime (no refunds for partial periods). No sharing accounts, no VPNs, no hacking. We protect your data (see Privacy Policy for details). We may update these terms, and using the service means you accept any changes.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Terms