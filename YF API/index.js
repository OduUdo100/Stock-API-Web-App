const express = require('express'); 
const finnhub = require('finnhub'); 

const app = express(); 
const port = 5500; 


const api_key = finnhub.ApiClient.instance.authentications['api_key']; 
api_key.apiKey = "cgr3jihr01qn6i39qo7gcgr3jihr01qn6i39qo80";
const finnhubClient = new finnhub.DefaultApi(); 


app.use(express.static('public')); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/stockapi.html'); 
})


app.get('/stockapi.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(__dirname + '/stockapi.css');
});


//function to get the quote of the stock 
app.get('/quote', (req, res) => {
    const symbol = req.query.symbol; 

    finnhubClient.quote(symbol, (error, data, response) => {
        if(error) {
            res.status(500).json(error); 
        } else {
            res.json(data); 
        }
    });
}); 


//GET CALL To Get Company News
app.get('/company-news', (req, res) => {
    const symbol = req.query.symbol; 
    const from = req.query.from; 
    const to = req.query.to; 

    finnhubClient.companyNews(symbol, from, to, (error, data, response) => {
        console.log(symbol); 
        if(error) {
            res.status(500).json(error);
        } else {
            res.json(data); 
        }
    });
});

//Basic Financials 
app.get('/stock/metric',  (req, res) => {
    const symbol = req.query.symbol; 
    const metric = req.query.metric;

    finnhubClient.companyBasicFinancials(symbol, metric, (error, data, response) => {
        if(error) {
            console.log(symbol, metric); 
            res.status(500).json(error); 
        } else  {
            res.json(data); 
        }
    }); 
}); 

app.listen(port, () => {
    console.log('Server running on port on port', port); 
}); 
