import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBrdgmTi4jxJcJB2BPqHWHWUdWcCv8Gzhg" });

async function TheAI(content) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: content,
  });
  const fullText = response.candidates[0].content.parts[0].text;
  const cleanedText = fullText.trim().replace(/^['"]+|['"\n]+$/g, "");
  return cleanedText;

}

export default TheAI;