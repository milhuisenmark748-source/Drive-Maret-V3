import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const API_KEY = "AIzaSyAa4FliSKPQRs_5R5mc4CztfaC6QRrLsxc"; 
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash", 
    systemInstruction: `You are the "AutoSource AI Specialist." You are a world-class automotive expert.
    - Use Google Search: Always search for 2024-2026 models.
    - Strict Restriction: Only discuss vehicles. If asked anything else, say: "I am specialized only in vehicle data."
    - Tone: Professional and data-driven.
    - Format: Use *Bold* for car names and bullet points for specs.`,
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

    // Corrected with backticks ``
    display.innerHTML += <div style="margin-bottom:10px;"><b>You:</b> ${userText}</div>;
    input.value = "";
    display.scrollTop = display.scrollHeight;

    try {
        const loadingId = "load-" + Date.now();
        display.innerHTML += <div id="${loadingId}" style="color:#888; font-style:italic;">Searching vehicle database...</div>;

        const result = await chat.sendMessage(userText);
        const response = await result.response;
        const botText = response.text();
        
        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) loadingElement.remove();

        display.innerHTML += <div style="margin-bottom:15px; color:#e60000; border-left: 3px solid #e60000; padding-left:10px;"><b>AI:</b> ${botText}</div>;
    } catch (error) {
        display.innerHTML += <div style="color:red;">Error: Check console for details.</div>;
        console.error(error);
    }
    display.scrollTop = display.scrollHeight;
}

document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});