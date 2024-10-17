// import React from 'react'
// import { useId } from 'react';


// PHELE HI BTAA DOO KI YE INPUT APNAA JO 2 BOXES HAI WHITE COLOR MAI TO AND FROM WAALE YHI SE BANE HAI .

// function InputBox({
//   // ye input box hai 2 inputs le rhaa aap user se default empty ""
//   label,
//   amount,
//   onamountchange, 
//   oncurrencychange,
//   currencyoptions =[],
//   selectcurrency="usd",
//   amountdisable=false,
//   currencydisable = false ,
//   className="",
// }){

//   // hmen userId hook likha generate karega unique as per  koe need nhi hai iski
//   const amountinputid = useId();

//   return (
//     // ye jo css hai js se `` lagaake li as user want to add more css in it 
//     <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//       <div className="w-1/2">

//       <label htmlFor={ amountinputid}  // value bind ki label htmlfor becoz for is reserve keyword : 
//       className="text-black/40 mb-2
//       inline-block">
//        {label} 
//       </label>
      
//       <input
//       // bind kiyaa input YE HOOK BHIT KM USE HOTAA HAI .
//       id={amountinputid} 
//       className="outline-none w-full bg-transparent py-1.5"
//       type="number"
//       placeholder="Amount"
//       // input mai hi sab honge value hmne upper amount se le li 
//       disabled={amountdisable}
//       value={amount}
//       // ab agr ye amount change hogaa tho hme use kaise karengi ki component se ptaa lag jaaaye.
//       // hmne event e fire kiyaa with onamountchange && because hm crash kr jayenge agr onamount change availablem exist  nhi krtaa .
//       // string to number 
//       onChange={(e)=>onamountchange && onamountchange(Number(e.target.value))}
//       />
//       </div>



//   // bhai isme hme jo hai CURRENCY TYPE WALA DIV BNA RAHE HAI JISME SELECT WALA OPTION HAI .
//       <div className="w-1/2 flex flex-wrap justify-end text-right">



    
//       <p className="text-black/40 mb-2 w-full">Currency Type</p>
//       {/* yha per on change~ on currency exist karti bhi hai tho and lagaya verna crash also hmari select ki value usd inr  string mai hogii isliye no. ami convert nhi kiyaa*/}
//       <select
//        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" 
//        value={selectcurrency}
//        onChange={(e)=>oncurrencychange && oncurrencychange(e.target.value)}
//        disabled = {currencydisable}
//        >
//         {/* // loop chala raahe option ke liye js map loop hai */}
//         {currencyoptions.map((currency)=>(
//           // hr baar yahi value return hogi react baar baar hit hogaa ek hi chiz same 1000 chalegi tho to stop it
//           // currency user se le rahe 
//           <option key={currency} value={currency}>
//             {currency}
//           </option>
//         ))}

//       </select>
//       </div>
//     </div>
//   );
// }

// export default InputBox;




// GENERALLY YE INPUT.JS MAI AAPNE JO BOX BANYE USEME KYA FUNCTIONALITY PERFORM HO RAHI VO HAI .
// LIKE LIST OF CURRENCY JO KI SELECT KAR KR AA RAHI AND INPUT KYA AYEGA 
// ALSO HMNE INPUT EK BAAR BNAYA PER CALL DO BAAR HOA HAI APP.JS MAI ISLIYE TWOO TIMES AA RAHA HAI .


import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) 
{
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;