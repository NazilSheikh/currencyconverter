// import { useState } from 'react'
// import './App.css'
// // import karnege baaki file ko tho hi run hogaa because mai running ka kaam app.jsx se hi hota hai 
// import { InputBox } from './components'
// // hook hai ye custom 
// import useCurrencyInfo  from './hooks/usecurrencyinfo'
// function App() {
//   const [amount, setamount] = useState(0)
//   const [from , setfrom] = useState("usd")
//   const [to , setto] = useState("inr")
//   const [convertedamount , setconvertedamount] = useState(0)

//   // currency info mai from ki value paass ki hai .
//   const currencyinfo = useCurrencyInfo(from);   // now this from value is converted to currency value in usecurrencyinfo.js 
//   // hme ye tho chahe ge ni ki answer pass kare 82.69  //
//   // but we want ke object pass ho // inr , usd etc
//  const options =  Object.keys(currencyinfo);
//  // to bhi ho rha hai from se to to se from inr to usd  and usd to inr
//  // swap to variables
//  const swap =()=>{
//   setfrom(to)
//   setto(from)
//   setconvertedamount(amount)
//   setamount(convertedamount)
//  }
// //  ab now user convert ko click kar rha tho usko answer chahiye :
// const convert=()=>{
//   setconvertedamount(amount*currencyinfo[to])  
//   }
//   return (
//    <div
//      className='w-full h-screen flex flex-wrap justify-center item-center bg-cover bg-no-repeat'
//      style={{
//       backgroundImage:`url('https://images.pexels.com/photos/20021121/pexels-photo-20021121/free-photo-of-birds-eye-view-of-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
//      }}
//     >
//     <div className='w-full '>
//         <div
        
//         className='w-full max-w-md mx-auto border  border-gray-60 
//         rounded-lg p-5 backdrop-blur-sm bg-white/30 '
//         >
//           {/* form jb submit hota hai tho kahi jata hai address ya url event fire e jo prevent kare default */}
//        <form 
//         onssubmit={(e)=>{
//           e.preventDefault();
//           convert();

//         }}
//        >

//        <div className='w-full mb-1'>
//         <InputBox
//         label="from"
//         amount={amount}
//         currencyoptions={options}
//         // currency change tho new amount bhi set kii 
//         oncurrencychange={(currency)=>setamount(amount)}
//         selectcurrency={from}
//         onamountchange={(amount) =>setamount(amount)}
//         />
//         </div>

//         <div className='relative w-full h-0.5'>
//           <button
//           type='button'
//           className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
//           border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5  '
//           onClick={swap}
//           >
//             swap
//           </button>
//           </div>

// {/* ye convert hone ke baaad */}
//           <div className='w-full mt-1 mb-4'>
//             <InputBox
//             label="to"
//             amount={convertedamount}
//             currencyoptions={options}
//             // converted currency change tho new amount bhi set kii 
//             oncurrencychange={(currency) => setto(currency)}
//             selectcurrency={from}
//             amountdisable
//             />
//           </div>
//          <button type='submit'
        //   className='w-full bg-blue-600 text-white px-4  py-3 rounded-lg'>
        //     convert {from.toUpperCase()} to {to.toUpperCase()}
       //    </button>

//        </form>

//         </div>
//        </div>
//         </div>
//   );
// }

// export default App




// vo code UPPER APNE LIKHAA PER NHI CHAL RHA HAI THO UPPER SE REFERENCE LE ELENAA




import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/usecurrencyinfo'


function App() {

  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState()

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (

    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2017/11/13/22/12/compass-2946959_1280.jpg)`
        }}
    >
        <div className="w-full">
        <h1 className=' text-center mb-10 text-4xl text-gray-200'>Currency Converter</h1>
       
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                        <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-yellow-700 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-yellow-700 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App