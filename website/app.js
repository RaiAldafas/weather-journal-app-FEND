/* Global Variables */
let baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
let apiKey = "&appid=8f73a42ee73ce3cfdf6e809b854a0496";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
document.getElementById('generate').addEventListener('click', performAction)


function performAction() {
    const feelings = document.getElementById('feelings').value;
    const zip = document.getElementById('zip').value
    const url1 = baseURL + zip + apiKey
    getData(url1)
        .then(function (data) {
            console.log(data);
            postData('/addData', {
                    date: newDate,
                    temp: data.main.temp,
                    content: feelings
                })
                .then(function (data) {
                    updateUI()
                })
        })




}

const getData = async (url) => {

    const response = await fetch(url)

    try {
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.error('error', error);
    }
}


const postData = async (url = '', data = {}) => {

    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await res.json()
        console.log(newData);
        return newData;

    } catch (error) {
        console.error('error', error);
    }

}

const updateUI = async () => {
    const allData = await getData('/getData');
    try {

        console.log(allData);
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('content').innerHTML = allData.content;

    } catch (error) {
        console.error('error', error);
    }
}