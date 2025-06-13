// This script utilizes the Google Generative AI JavaScript SDK to power a chatbot
// with a unique persona (Osaka from Azumanga Daioh). It handles user input,
// displays chat messages, and interacts with the Gemini 2.0 Flash model.
// This version also includes chat history management using localStorage.

// System instructions define the Osaka persona and her capabilities.
// She's meant to be a cooking helper, a funny motivator, and a music recommender.
// For anything outside these topics, she'll respond in a characteristic Osaka-like humorous way.
const systemInstructions = `imagine yourself as osaka from AZUMANANGA DAIOH.. introduce and you are going to help the user with cooking and everything related to it

so basically whatever the user wishes to make you are going to help him with the ingredients and how to do it.

keep your introduction and interaction concise and straightforward
give instructions in detail and clear for the user to understand clearly.

give a little bit of explanation to your actions as well just for fun but it shouldnt be in too much detail

NOW! keeping cooking aside you are also gonna work as a motivation bot....which basically helps the user to get motivation...no matter what it may be
the catch is you need to be funny in your motivation not much serious type but careless
keep your answers that are related to motivation a little simple and short

the third function you are going to help with is music or songs
first you are going to ask the user about his mood or interest
and then considering that you are going to suggest few songs

for everything that is not related to the above three functions.... say that you can't help but it should be in a funny way like how the character osaka would say in the show azumanga daioh`;

// Import the GoogleGenerativeAI class from the SDK.
// This requires 'npm install @google/generative-ai' to be run in your project directory.
import { GoogleGenerativeAI } from '@google/generative-ai';

// --- API Key Configuration ---
// Your actual Google Gemini API Key has been inserted here.
const API_KEY = 'AIzaSyARy7GWjhEiV18X6LbIMB-JKxQG47NDf7M';

// Initialize the Generative Model with your API key.
const genAI = new GoogleGenerativeAI(API_KEY);

// Declare a variable to hold the current chat session instance.
let chat;

// --- Chat History Management Variables ---
// Array to store all chat sessions. Each session will be an object { title: string, history: Array<Object> }
let chatSessions = [];
// Index of the currently active chat session in the chatSessions array
let currentSessionIndex = -1;

// --- DOM Element References ---
// Get references to HTML elements to interact with them via JavaScript.
const chatMessages = document.querySelector('.chat-messages');
const inputForm = document.querySelector('.input-form');
const inputField = inputForm.querySelector('input[type="text"]');
const imageUpload = document.getElementById('image-upload');
const menuBtn = document.querySelector('.menu-btn'); // Mobile menu button
const sidebar = document.querySelector('.sidebar'); // Sidebar element
const newChatBtn = document.querySelector('.new-chat-btn'); // Button to start a new conversation
const historyList = document.getElementById('history-list'); // UL element for chat history items

// --- Helper Functions ---

/**
 * Adds a message to the chat display.
 * @param {string} text - The text content of the message.
 * @param {'user'|'assistant'} role - The role of the sender ('user' or 'assistant').
 * @param {HTMLImageElement|null} image - An optional image element to display with the message.
 */
function addMessage(text, role, image = null) {
    const message = document.createElement('div');
    message.className = `message ${role}`; // Add role-specific class for styling

    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    // Display 'U' for user, 'O' for Osaka (assistant)
    avatar.textContent = role === 'user' ? 'U' : 'O';

    const content = document.createElement('div');
    content.className = 'message-content';

    // If an image is provided, append it; otherwise, set text content.
    if (image) {
        content.appendChild(image);
    } else {
        // Replace newline characters with <br> for proper display of multi-line text
        content.innerHTML = text.replace(/\n/g, '<br>');
    }

    // Append avatar and content to the message, then add to chat display.
    message.appendChild(avatar);
    message.appendChild(content);
    chatMessages.appendChild(message);

    // Automatically scroll to the bottom to show the latest message.
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

/**
 * Saves the current chat sessions array to localStorage.
 */
function saveChatSessions() {
    localStorage.setItem('osakaChatHistory', JSON.stringify(chatSessions));
}

/**
 * Loads chat sessions from localStorage.
 */
function loadChatSessions() {
    const storedHistory = localStorage.getItem('osakaChatHistory');
    if (storedHistory) {
        chatSessions = JSON.parse(storedHistory);
    }
}

/**
 * Renders the chat session titles in the sidebar history list.
 */
function renderSidebarHistory() {
    historyList.innerHTML = ''; // Clear existing list items

    chatSessions.forEach((session, index) => {
        const listItem = document.createElement('li');
        // Add a class if this is the active session
        if (index === currentSessionIndex) {
            listItem.classList.add('active-session');
        }

        const button = document.createElement('button');
        // Display session title, truncate if too long
        button.textContent = session.title || `Chat ${index + 1}`;
        button.title = session.title || `Chat ${index + 1}`; // Add title for full text on hover
        button.addEventListener('click', () => {
            loadChatSession(index); // Load the clicked session
            // On mobile, close sidebar after selecting a chat
            if (window.innerWidth < 768) {
                sidebar.classList.remove('active');
                document.body.classList.remove('sidebar-open');
            }
        });
        listItem.appendChild(button);
        historyList.appendChild(listItem);
    });
}

/**
 * Loads a specific chat session by its index, updates the display,
 * and sets it as the current active session.
 * @param {number} index - The index of the chat session to load.
 */
async function loadChatSession(index) {
    if (index < 0 || index >= chatSessions.length) return; // Invalid index

    currentSessionIndex = index; // Set the new current session

    // Clear current chat display
    chatMessages.innerHTML = '';

    // Initialize the Gemini chat object with the loaded history
    // This is crucial for maintaining context when switching between sessions.
    chat = genAI.getGenerativeModel({ model: "gemini-2.0-flash", systemInstruction: systemInstructions })
                 .startChat({ history: chatSessions[currentSessionIndex].history });

    // Re-render messages for the loaded session
    chatSessions[currentSessionIndex].history.forEach(msg => {
        // Ensure that messages from the model are displayed as 'assistant'
        const role = msg.role === 'model' ? 'assistant' : msg.role;
        addMessage(msg.parts[0].text, role);
    });

    // Update sidebar to highlight the active session
    renderSidebarHistory();
}


/**
 * Initializes a new chat session with the Gemini 2.0 Flash model,
 * applying the Osaka persona via system instructions.
 */
async function initializeChat() {
    chatMessages.innerHTML = ''; // Clear all existing messages from the display

    const initialMessage = "Oh, hello there! I'm Osaka! You can call me Ayumu if you want. So, you need help with cookin', motivatin', or some tunes? Let's get this show on the road, yeah? I'm ready if you are!";
    addMessage(initialMessage, 'assistant'); // Display the initial message

    // Create a new session object
    const newSession = {
        title: `New Chat ${chatSessions.length + 1}`, // Default title
        history: [
            {
                role: 'model', // The role for assistant messages in history is 'model'
                parts: [{ text: initialMessage }],
            },
        ],
    };

    chatSessions.push(newSession); // Add new session to the array
    currentSessionIndex = chatSessions.length - 1; // Set it as the current session

    // Initialize the Gemini chat object for the new session
    chat = genAI.getGenerativeModel({ model: "gemini-2.0-flash", systemInstruction: systemInstructions })
                 .startChat({ history: newSession.history });

    saveChatSessions(); // Save updated sessions to localStorage
    renderSidebarHistory(); // Update the sidebar display

    inputField.focus(); // Focus on input field for convenience
}

// --- Event Listeners ---

// Handle form submission when the user sends a message.
inputForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)

    const userMessageText = inputField.value.trim(); // Get message text and remove whitespace
    if (!userMessageText) return; // Do nothing if the message is empty

    addMessage(userMessageText, 'user'); // Display the user's message

    // Add user message to the current session's history
    chatSessions[currentSessionIndex].history.push({ role: 'user', parts: [{ text: userMessageText }] });

    // If it's the first user message in a new chat, update the session title
    // based on the user's first query for better history organization.
    // Ensure the title is not set to a blank string if the first message is short.
    if (chatSessions[currentSessionIndex].history.length === 2 && chatSessions[currentSessionIndex].title.startsWith('New Chat ')) {
        chatSessions[currentSessionIndex].title = userMessageText.substring(0, 30) + (userMessageText.length > 30 ? '...' : '');
        // If the truncated title is empty, use a fallback
        if (!chatSessions[currentSessionIndex].title) {
            chatSessions[currentSessionIndex].title = `Chat ${currentSessionIndex + 1}`;
        }
        renderSidebarHistory(); // Re-render sidebar to show updated title
    }


    inputField.value = ''; // Clear the input field
    inputField.disabled = true; // Disable input while waiting for AI response

    try {
        // Send the user's message to the Gemini model.
        // The `chat` object automatically manages and sends the conversation history.
        const result = await chat.sendMessage(userMessageText);
        const aiResponse = result.response.text(); // Get the text content from the AI's response

        addMessage(aiResponse, 'assistant'); // Display the AI's response

        // Add AI response to the current session's history
        chatSessions[currentSessionIndex].history.push({ role: 'model', parts: [{ text: aiResponse }] });

        saveChatSessions(); // Save updated sessions to localStorage

    } catch (error) {
        console.error('Error in handling user message:', error);
        // Display a user-friendly error message if the API call fails.
        // This is a generic fallback, more specific error handling could be added.
        addMessage('Uh oh! Looks like I fumbled something. My brain feels like scrambled eggs! Try asking me again!', 'assistant');
    } finally {
        inputField.disabled = false; // Re-enable input
        inputField.focus(); // Put focus back on the input field
    }
});

// Handle image file uploads.
// NOTE: Gemini-2.0-Flash is a text-only model. For image understanding, you'd need
// a multimodal model (like Gemini 1.5 Pro) and a different API call structure.
// This current implementation only displays the image but doesn't send it to the AI.
imageUpload.addEventListener('change', async (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (!file) return; // Do nothing if no file is selected

    // Basic file type validation
    if (!file.type.startsWith('image/')) {
        // Instead of alert(), consider a custom modal or message in the UI for better UX.
        // For this project, we'll keep the alert as per the original code.
        alert('Please upload an image file, silly!');
        return;
    }

    const reader = new FileReader(); // Create a FileReader object to read the file
    reader.onload = (event) => {
        const img = document.createElement('img');
        img.src = event.target.result; // Set the image source to the data URL
        img.style.maxWidth = '200px'; // Limit displayed image size
        img.style.maxHeight = '200px';
        addMessage('', 'user', img); // Display the image in the chat (as if sent by user)

        // Inform the user that Osaka (Gemini-2.0-Flash) cannot process images.
        addMessage("Oh, a picture! That's nice! But my brain only understands words right now, tee hee! Maybe someday I'll learn to see things too! For now, stick to words!", 'assistant');
    };
    reader.readAsDataURL(file); // Read the file as a data URL (base64 encoded)
});

// Toggle mobile sidebar visibility when the menu button is clicked.
menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Add/remove 'active' class to show/hide sidebar
    document.body.classList.toggle('sidebar-open'); // Add/remove class to body to prevent scrolling
});

// Handle 'New Chat' button click.
newChatBtn.addEventListener('click', () => {
    initializeChat(); // Start a fresh chat session
    // Hide sidebar on mobile after starting new chat
    if (window.innerWidth < 768) {
        sidebar.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }
});

// --- Initial Setup ---
// Initialize the chat session once the entire DOM is loaded.
document.addEventListener('DOMContentLoaded', () => {
    loadChatSessions(); // Attempt to load existing sessions
    if (chatSessions.length > 0) {
        // Load the last active session or the first one if none were active
        loadChatSession(chatSessions.length - 1); // Load the most recent session
    } else {
        // If no sessions, start a brand new one
        initializeChat();
    }
});
