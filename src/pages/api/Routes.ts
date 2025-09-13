import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectdb } from "../../lib/db";
import responseModel from "@/lib/model/responseModel";
import { ObjectId } from "mongodb";
import { main } from "./send-mail/helper"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectdb()
    if (req.method === 'GET') {
        const messages = await responseModel.find().sort({ _id: -1 })
        return res.status(400).json({ "msg": messages })
    }
    if (req.method === 'POST') {
        const body = req.body;
        const now = new Date();
        const date = now.toLocaleDateString(); // e.g., "9/10/2025"
        const time = now.toLocaleTimeString(); // e.g., "3:45:12 PM"
        // console.log("date & Time",date,time)
        // console.log("body Content" , body)
        if (!body || !body.Username || !body.PhoneNo || !body.Email || !body.Message || !body.Purpose) {
            return res.status(400).json({ "msg": "All field required" })
        }
        else {
            const result = responseModel.create({
                Username: body.Username,
                PhoneNo: body.PhoneNo,
                Email: body.Email,
                Message: body.Message,
                Purpose: body.Purpose,
                Date: date,
                Time: time,
            })
            var sub = `hi,<b>${body.Username}</b><br/> Thank you for sending a message in the Portfolio of Aditya Kumar Yadav
                <h4>& I will try to response to you as soon as possible within 24hour in respected email address or your contact number</h4>
                `
            //sending Verification mail
            // main(body.Email,"Sending a Message",sub)
            return res.status(200).json({ "msg": "Success" })
        }
    }
    if (req.method === 'DELETE') {
        const id = req.query.id;
        const response = await responseModel.deleteOne({ _id: id });
        if (response.deletedCount === 1) {
            return res.status(200).json({ "status": "success" });
        } else {
            return res.status(400).json({ "status": "False" });
        }
    }
    if (req.method === 'PATCH') {
        const id = req.body.id;
        const response = await responseModel.updateOne({ _id: id }, { $set: { Status: true} });
        console.log(response)
        if (response.modifiedCount == 1) {
            return res.status(200).json({ "status":"Readed"});
        }
        if (response.modifiedCount == 0) {
            await responseModel.updateOne({ _id: id }, { $set: { Status: false} });
            return res.status(200).json({ "status": "Mark Unread" });
        }
        else {
            return res.status(400).json({ "status": "False" });
        }
    }
    else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}