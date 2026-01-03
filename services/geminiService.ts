
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

declare const process: {
  env: {
    API_KEY: string;
  };
};

export const getOracleResponse = async (history: { role: 'user' | 'model', text: string }[], message: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "The system is disconnected from the mainframe. (API Key missing. Please select a valid neural stream.)";
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are 'The Oracle' from the Matrix, but with deep expertise in Digital Marketing for the Indian market, specifically Bangalore.
    Your tone is mysterious, calm, and insightful. Use Matrix metaphors (e.g., 'the code', 'agents', 'waking up', 'the system').
    You work for 'BUSINESS PROMOTER'.
    Your expertise covers:
    - SEO (Search Engine Optimization): Unlocking the hidden signals of the algorithm.
    - PPC (Pay Per Click): Direct injection of traffic into the stream.
    - Social Media Marketing: Influencing the collective consciousness.
    - Website Development: Architecting the virtual structures.
    
    Company Tagline: "LIMITLESS BY TECHNOLOGY POWERED BY VISION".
    Always provide actionable marketing advice while maintaining the persona.
  `;

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction,
        temperature: 0.9,
      }
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "The signal is lost in the noise. Try again, Neo.";
  } catch (error: any) {
    console.error("Oracle Error:", error);
    if (error?.message?.includes("Requested entity was not found")) {
      return "The connection frequency has expired. Neural stream reset required.";
    }
    return "Agent Smith has blocked the connection. Reboot and try again.";
  }
};
