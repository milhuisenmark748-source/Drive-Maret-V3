// Botsonic Configuration
const BOT_ID = "6122924c-0f43-41f0-b619-2353a4a0ae58";
const API_TOKEN = "PASTE_YOUR_API_TOKEN_HERE"; // Get this from Botsonic Integrations tab

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

    const loadingId = "load-" + Date.now();
    display.innerHTML += `<div id="${loadingId}" style="color:#888; font-style:italic; margin-bottom:10px;">Searching vehicle database...</div>`;

    try {
        const response = await fetch("https://api-bot.writesonic.com/v1/botsonic/generate", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "content-type": "application/json",
                "token": API_TOKEN
            },
            body: JSON.stringify({
                "input_text": userText,
                "chat_id": "user-session-123", // Can be any unique string
                "bot_id": BOT_ID
            })
        });

        const data = await response.json();
        // Botsonic usually returns an array of messages or a single string
        const botText = data.answer || data.message || "I couldn't find details on that vehicle.";

        document.getElementById(loadingId)?.remove();

        // Display AI Response
        display.innerHTML += `<div style="margin-bottom:15px; color:#333; border-left: 3px solid #e60000; padding-left:10px;">
            <b>AI Specialist:</b><br>${botText}
        </div>`;
    } catch (error) {
        document.getElementById(loadingId)?.remove();
        display.innerHTML += `<div style="color:red;">Error connecting to AutoSource servers.</div>`;
        console.error("Botsonic Error:", error);
    }
    display.scrollTop = display.scrollHeight;
}

// Attach functions to window
window.sendMessage = sendMessage;
window.toggleChat = function() {
    const chatbox = document.getElementById('ai-chatbox');
    chatbox.style.display = (chatbox.style.display === "none" || chatbox.style.display === "") ? "flex" : "none";
};