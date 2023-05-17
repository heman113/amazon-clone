const functions = require("firebase-functions");
const express = require("express");
const cors = require ("cors");
const stripe = require("stripe")("sk_test_51MKbhpSDEV6M61cTsMf0PR1QiJJYck56BkzpBgS2MfLLHcW1W0SVNfoPJizCSzG8jriRo6MqLLDKgJIDmFDP9vcm00AMfrpWrW")

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get('/',(req,res) => {
    res.status(200).send('hello world')
});

app.post('/payments/create',async (req,res) => {
    const total = req.query.total;
    console.log('payment request recieved', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    res.status(201).send({
        clientSecret: paymentIntent.clientSecret,
    })
})

exports.api = functions.https.onRequest(app);