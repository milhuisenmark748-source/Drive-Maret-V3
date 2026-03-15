import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "https://esm.run/@google/generative-ai";

const API_KEY = "AIzaSyAa4FliSKPQRs_5R5mc4CztfaC6QRrLsxc"; 
const genAI = new GoogleGenerativeAI(API_KEY);

// 1. Configure Safety Settings to allow detailed vehicle discussions
const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
];

const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash", 
    systemInstruction: `You are the "AutoSource AI Specialist." You are a world-class automotive expert based in Sri Lanka.
    - Use Google Search: Always search for 2024-2026 models to provide accurate, up-to-date specs.
    - Strict Restriction: Only discuss vehicles (cars, bikes, trucks). If asked anything else, say: "I am specialized only in vehicle data."
    - Tone: Professional, technical, and data-driven.
    - Format: Use *Bold* for car names and bullet points for technical specifications (Engine, HP, Torque, 0-100km/h).`,
    safetySettings, // Apply the safety fix here
    tools: [{ googleSearch: {} }] 
});

const chat = model.startChat();

// Toggle Function
window.toggleChat = function() {
    const chatbox = document.getElementById('ai-chatbox');
    if (chatbox.style.display === "none" || chatbox.style.display === "") {
        chatbox.style.display = "flex";
    } else {
        chatbox.style.display = "none";
    }
};

// Send Message Function
async function sendMessage() {
    const input = document.getElementById('user-input');
    const display = document.getElementById('chat-display');
    const userText = input.value.trim();
    
    if (!userText) return;

    // Display User Message
    display.innerHTML += `<div style="margin-bottom:10px; text-align:right;">
        <span style="background:#f1f1f1; padding:8px 12px; border-radius:15px; display:inline-block;">${userText}</span>
    </div>`;
    
    input.value = "";
    display.scrollTop = display.scrollHeight;

    try {
        const loadingId = "load-" + Date.now();
        display.innerHTML += `<div id="${loadingId}" style="color:#888; font-style:italic; margin-bottom:10px;">Searching vehicle database...</div>`;
        display.scrollTop = display.scrollHeight;

        const result = await chat.sendMessage(userText);
        const response = await result.response;
        const botText = response.text();
        
        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) loadingElement.remove();

        // Display AI Response
        display.innerHTML += `<div style="margin-bottom:15px; color:#333; border-left: 3px solid #e60000; padding-left:10px; line-height:1.5;">
            <b>AI Specialist:</b><br>${botText.replace(/\n/g, '<br>')}
        </div>`;
    } catch (error) {
        // If it still blocks, show a clear error
        display.innerHTML += `<div style="color:red; font-size:12px;">Error: ${error.message}. Please try a different query.</div>`;
        console.error("Chat Error:", error);
    }
    display.scrollTop = display.scrollHeight;
}

// Attach to window for HTML access
window.sendMessage = sendMessage;