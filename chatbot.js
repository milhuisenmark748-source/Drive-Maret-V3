const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

async function getWikiData(query) {
    const endpoint = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=1&namespace=0&format=json&origin=*`;
    
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        
        if (data[1] && data[1].length > 0) {
            return {
                title: data[1][0],
                summary: data[2][0] || "No summary available.",
                link: data[3][0]
            };
        }
        return null;
    } catch (error) {
        console.error("Fetch error:", error);
        return "error";
    }
}

function appendMessage(text, sender, link = null) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);
    
    let content = `<span>${text}</span>`;
    if (link) {
        content += `<a href="${link}" target="_blank" class="wiki-link">Read full article →</a>`;
    }
    
    msgDiv.innerHTML = content;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function handleChat() {
    const query = userInput.value.trim();
    if (!query) return;

    appendMessage(query, 'user');
    userInput.value = '';

    const result = await getWikiData(query);

    if (result === "error") {
        appendMessage("Connection error. Please check your internet.", 'bot');
    } else if (result) {
        appendMessage(result.summary, 'bot', result.link);
    } else {
        appendMessage("I couldn't find that on Wikipedia. Try another topic!", 'bot');
    }
}

sendBtn.addEventListener('click', handleChat);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleChat();
});