import { GoogleGenerativeAI } from "@google/generative-ai";


export async function getGemResponse(list) {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are a cooking assistant. Given this list of ingredients: ${list}, suggest a recipe. Use markdown format.`;

    const result = await model.generateContent(prompt);
    return (result.response.text());
}

