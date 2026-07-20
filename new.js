
alert("enter the amount you want to convert");
let Initial=document.querySelector(".input");
let Input=prompt("enter the amount");
Initial.value=Input;

let Result=document.querySelector(".input1");


let from=document.querySelector(".from");
let to=document.querySelector(".to");







from.addEventListener("click",()=>{

    async function Api(){

        let Url=`https://open.er-api.com/v6/latest/${from.value}`;
        let response= await fetch(Url);
           console.log(response);

        let JSON= await response.json();
            console.log(JSON);

        let base=JSON.base_code;
            console.log(base);
    }
   Api();
})


to.addEventListener("click",()=>{
    async function rate(){
let Url=`https://open.er-api.com/v6/latest/${from.value}`;

    let response= await fetch(Url);
           console.log(response);

        let JSON= await response.json();
            console.log(JSON);

        let base=JSON.base_code;
            console.log(base);

       let rate=JSON.rates;
       console.log(rate); 
     let CurrRate=rate[to.value];
     console.log(CurrRate);

    let amount=parseFloat(Initial.value);//use to get prompt value
    let Total=amount*CurrRate;
    console.log(Total);
    Result.value=Total;
   
    console.log(Total)
    }
  rate();
})





