// import { useEffect , useState } from "react";


// // YE PURAA CUSTOM HOOK :
// function useCurrencyInfo(currency)
// {
//     const[data , setdata] = useState({})  // ander empty object in case koe value nhi aaaaa rahi tho loop lagaaoge tho crash nhi karegaa
//     useEffect(()=>
//         {    // JO AAP VALUE PASS KARENGE USD KI JAGH ABHI CURRENCY LIKHAA HAI THO KEY VALUE THAT IS API SAB SE PHELE VALUE VO HI AYEGI
//              fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies
//              .then((res)=>res.json())   // response ko json mai convert kiyaa 
             
//              // JO AAP VALUE PASS KARENGE USD KI JAGH ABHI CURRENCY LIKHAA HAI THO KEY VALUE THAT IS API SAB SE PHELE VALUE VO HI AYEGI
//              // hm access kar lenge currency ko fir hmari problem solve ke .usd likhna hai ya .inr ye currency ke hisab se set jaayegaa
//              .then((res)=>setdata(res[currency]) )  //convert hone ke baad ddataa ko hold karna hai kahi naa kahi now to store data we storred it .   
//               console.log(data);
//             },[currency])   // dependency array currency mai jab change ho call karenge 

//             console.log(data);
//             return data
//           }
// // we design functionality and return whole method becoz method is also returning data 
// export default useCurrencyInfo;


import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json
            `)
        .then((res) => res.json())  // this si the country code in form of string 
        .then((res) => setData(res[currency]))  // this is the country currency data or value 
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;