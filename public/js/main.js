const name = document.getElementById('name');
const temp = document.getElementById('temp');
const sbtButton = document.getElementById('sbtButton');
const cityname = document.getElementById('cityname');
const getInfo = async(event) => {
    let cityvalue = cityname.value;
    event.preventDefault();
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=940176e9836d47f570b70aec1c7f5eff`;
        const response = await fetch(url);
        const data = await response.json()
        arrData = [data];
        console.log(arrData);
        name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
        var num = arrData[0].main.temp-273.15;
        temp.innerText = num.toFixed(2) + `C`;


    }catch{

    }
       

    
   
   


} 
sbtButton.addEventListener('click' ,getInfo);