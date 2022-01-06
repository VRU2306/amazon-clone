const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")("sk_test_51KDo2lSAOl6yOqLJ6zPnkc2qaaCksPToQepdAzlaotm4tmlG64b6FrPx3QHl7EfvRy4pBdrAWvgFNY9jQctF4Fy800unwttazw")
const path = require("path");
const http = require("http");

const app = express()
app.use(cors({origin: true}))
app.use(express.json())
app.get("/", (request, response) =>
  response.status(200).send("cloud function working")
);
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment recieved = ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",

   

  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


exports.api = functions.https.onRequest(app)
