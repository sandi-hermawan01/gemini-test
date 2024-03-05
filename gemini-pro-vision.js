const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const dotenv = require("dotenv").config();
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Converts local file information to a GoogleGenerativeAI.Part object.
function GenerativeFile(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

async function geminiRunning() {
  // For text-and-image input (multimodal), use the gemini-pro-vision model
  const gemini_model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt = "Do you know what spices are in the image?";

  const our_image = [
    GenerativeFile("image-spice.jpg", "image/jpeg"),
    // fileToGenerativePart("image2.jpeg", "image/jpeg"),   #uncomment if you have a multiple image
  ];

  const result = await gemini_model.generateContent([prompt, ...our_image]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

geminiRunning();
