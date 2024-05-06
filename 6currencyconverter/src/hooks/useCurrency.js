import {useEffect,useRef,useState} from 'react';



function useCurrency (currency){

    const [data,setdata] = useState({});

    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/USD
        ${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
      }, [currency])
  
      console.log(data);
      return data
  

}

export default useCurrency;