function getData(){
    const city=search.value;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'key',
            'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
    .then(response=>response.json())
    .then(res=>{
        console.log(res);
        temp.innerHTML=res.temp;
        ws.innerHTML=res.wind_speed;
        hmdty.innerHTML=hmdty.humidity;
    })
    .then(err=>console.log(err));
}