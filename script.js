//http://api.weatherapi.com/v1/current.json?key=d5bbacfde4a64b34992130441252203&q=delhi india&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".city");
const dateandTimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".conditionInfo");
const searchField = document.querySelector(".search_area");
const form = document.querySelector('form')
form.addEventListener('submit',searchForLocation)

let target="Delhi"

const fetchResults = async(targetLocation)=>{
    let url= `http://api.weatherapi.com/v1/current.json?key=d5bbacfde4a64b34992130441252203&q=${targetLocation}&aqi=no`
    const res=await fetch(url)
    const data=await res.json()
    console.log(data)
    let locationName=data.location.name
    let time=data.location.localtime
    let temp=data.current.temp_c
    let condition=data.current.condition.text
    updateDetails(temp,locationName,time,condition)
} 

function updateDetails(temp,locationName,time,condition){
    temperatureField.innerText=temp 
    locationField.innerText=locationName
    dateandTimeField.innerText=time
    conditionField.innerText=condition
}

function searchForLocation(e){
    e.preventDefault()
    target= searchField.value
    fetchResults(target) 
}
fetchResults(target)

