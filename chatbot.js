// Function to fetch data from Wikipedia
async function getWikiData(query) {
    const endpoint = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=1&namespace=0&format=json&origin=*`;
    
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        
        // Wikipedia returns: [query, [titles], [summaries], [links]]
        if (data[1] && data[1].length > 0) {
            return {
                title: data[1][0],
                summary: data[2][0] || "No summary available for this topic.",
                link: data[3][0]
            };
        }
        return null; 
    } catch (error) {
        console.error("Fetch error:", error);
        return "error";
    }
}

// Function to add message bubbles to the chat box
function appendMessage(text, sender, link = null) {
    const chatBox = document.getElementById('chat-box');
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);
    
    let content = `<span>${text}</span>`;
    if (link) {
        content += `<a href="${link}" target="_blank" class="wiki-link">Read full article →</a>`;
    }
    
    msgDiv.innerHTML = content;
    chatBox.appendChild(msgDiv);
    
    // Auto-scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Main logic to handle user interaction
async function handleChat() {
    const userInput = document.getElementById('user-input');
    const query = userInput.value.trim();
    
    if (!query) return;

    // 1. Display User Message
    appendMessage(query, 'user');
    userInput.value = '';

    // 2. Fetch Data from Wikipedia
    const result = await getWikiData(query);

    // 3. Handle the Response
    if (result === "error") {
        appendMessage("Connection error. Please check your internet.", 'bot');
    } else if (result) {
        appendMessage(result.summary, 'bot', result.link);
    } else {
        appendMessage("I couldn't find that on Wikipedia. Try another topic!", 'bot');
    }
}

// --- INITIALIZATION ---
// This ensures the script waits for the HTML to load before looking for buttons
document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');

    if (sendBtn) {
        sendBtn.addEventListener('click', handleChat);
    }

    if (userInput) {
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleChat();
        });
    }
});