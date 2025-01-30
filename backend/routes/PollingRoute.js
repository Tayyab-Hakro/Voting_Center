import express from "express";
import { CreateVoting } from "../Controller/VotingController.js";
import { IsAuthentication } from "../Auth/Authentication.js";

const Createpoll = express.Router();

Createpoll.post("/create-post", IsAuthentication,CreateVoting  )
//Createpoll.post("/login", Login);





export default Createpoll;



