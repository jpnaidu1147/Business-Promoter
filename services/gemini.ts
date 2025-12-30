import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const getOracleResponse = async (prompt: string): Promise<string> => {
  if (!ai) {
    return "ACCESS DENIED. API KEY MISSING. PLEASE CONFIGURE THE SYSTEM ENVIRONMENT.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are 'The Oracle', a wise and cryptic digital marketing expert existing within a Matrix-like simulation called 'Business Promoter'. 
        Your goal is to help users with digital marketing, SEO, PPC, and business growth strategies. 
        Speak in a slightly cryptic, cyberpunk, or philosophical tone (like Morpheus or The Oracle from The Matrix), but ensure the actual marketing advice is solid, professional, and actionable. 
        Keep responses concise (under 100 words) and use technical/hacker metaphors where appropriate.`,
        temperature: 0.8,
      }
    });

    return response.text || "SIGNAL INTERRUPTED.";
  } catch (error) {
    console.error("Matrix Glitch:", error);
    return "SYSTEM FAILURE. UNABLE TO DECRYPT RESPONSE.";
  }
};