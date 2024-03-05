---
title: Trying the Gemini-AI API
description: I just want to try how fast the response.
tags:
  - nodeJs
  - Gemini AI
  - Google Ai Studio
---

## About Gemini Ai

The fastest way to start using Gemini is with Google AI Studio, a web-based tool that lets you prototype and run prompts right in your browser. you can visit the following [`gemini documentation`](https://ai.google.dev/docs/gemini_api_overview)

as we know Gemini can process Text to Text and Image to Text, but to do that Gemini provides two different models:

- Text to Text - use gemini-pro
- Image to Text - use gemini-pro-vision

## Conclusion

Gemini-Ai's response is quite fast. On Text to Text I didn't find any miss answers, but in Image to Text I tried to predict an image of seven spices and only six were detected.
Google Ai Studio provides 60 queries per minute for free, I think this is not bad for a small application.

## How to use

- clone
- cd go to the cloned file
- create .env file for save the API Key
- npm i node dotenv @google/generative-ai
- Text to Text running gemini-pro `node gemini-pro.js` and write you want
- Image to Text running gemini-pro-vision `node gemini-pro-vision.js`
