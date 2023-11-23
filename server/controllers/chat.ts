import { Request, Response } from "express";
import axios from "axios";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

// const openai = new OpenAI(process.env.CHAT_API_KEY);
const openai = new OpenAI({ apiKey: process.env.CHAT_API_KEY });

export const chat = async (req: Request, res: Response) => {
  const { message } = req.body;

  const completion = await openai.completions.create({
    model: "davinci-002",
    prompt: message,
    max_tokens: 150,
    temperature: 0,
  });

  return res.json({ message: completion.choices[0].text });
};
