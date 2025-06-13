🤖 Osaka Chatbot: Your Quirky AI Assistant!
Welcome to the Osaka Chatbot! This is a fun and interactive web-based chatbot featuring Osaka (Ayumu Kasuga) from Azumanga Daioh. She's here to help you with a variety of tasks, always with her unique, often humorous, perspective!

✨ Features
Cooking Companion: Need a recipe or ingredients for your next culinary adventure? Osaka's got your back! She'll provide detailed, clear instructions.

Motivation Guru (with a twist!): Feeling down? Osaka will give you lighthearted, funny, and sometimes careless motivation to get you going. Forget serious, embrace the silly!

Music Maestro: Tell Osaka your mood or interests, and she'll suggest some tunes to fit the vibe.

Quirky Responses: For anything outside her main functions, expect classic Osaka-style funny and slightly confused replies.

Chat History: All your conversations are saved locally in your browser, so you can revisit them anytime from the sidebar.

Responsive Design: The interface is designed to look great and be user-friendly on various screen sizes, from mobile phones to desktop monitors.

Interactive UI: Enjoy subtle animations, hover effects, and a sleek "Matrix" theme that enhances the user experience.

🚀 Technologies Used
HTML5: For the basic structure of the web page.

CSS3: For all styling, including responsive design, animations, and the Matrix theme.

Google Fonts: Rajdhani for headings and Space Mono for chat text, ensuring readability and theme consistency.

JavaScript (ES Modules): For dynamic content, user interaction, and API communication.

Google Gemini API (gemini-2.0-flash): The powerful AI model that gives Osaka her conversational abilities.

Vite: A fast development server and build tool for modern JavaScript projects.

npm: Node Package Manager for managing project dependencies.

localStorage: For persisting chat history across browser sessions.

Font Awesome: For various icons used in the UI (menu, send, image upload).

🛠️ Setup and Installation
Follow these steps to get your Osaka Chatbot running locally:

1. Prerequisites
Node.js and npm installed on your machine.

A Google Gemini API Key. You can get one from Google AI Studio or Google Cloud Console.

2. Project Files
Make sure you have the following files in your project directory:

index.html

style.css

script.js

package.json (create this if you don't have it)

3. Create package.json (if missing)
If you don't already have one, create a file named package.json in your project's root directory and paste the following content:

{
  "name": "osaka-chatbot",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@google/generative-ai": "^0.2.1"
  },
  "devDependencies": {
    "vite": "^5.4.2"
  }
}

4. Install Dependencies
Open your terminal or command prompt, navigate to your project directory, and run:

npm install

This will install vite and @google/generative-ai along with their necessary dependencies.

5. Add Your API Key
Open script.js and locate the line:

const API_KEY = 'YOUR_API_KEY'; // <<< PASTE YOUR API KEY HERE >>>

Replace 'YOUR_API_KEY' with your actual Google Gemini API key. Do not commit your API key directly to public GitHub repositories! For personal projects, this is fine, but for production or shared environments, consider using environment variables.

6. Run the Development Server
In your terminal, within your project directory, run:

npm run dev

Vite will start a local development server, and it will usually provide a URL like http://localhost:5173. Open this URL in your web browser.

💡 Usage
Start a New Chat: Click the "New Chat" button in the sidebar to begin a fresh conversation with Osaka.

Send Messages: Type your query in the input field at the bottom and press Enter or click the send button.

Image Upload: You can upload images, but please note that Osaka (using Gemini 2.0 Flash) is a text-only model and cannot process image content. She will acknowledge the image but won't "understand" it.

Chat History: Your past conversations will appear in the "Chat History" section of the sidebar. Click on any entry to load that conversation back into the main chat area.

Mobile View: On smaller screens, the sidebar can be toggled open/closed using the menu button in the top-left corner.

🙏 Credits
Osaka (Ayumu Kasuga): Character from the anime/manga series Azumanga Daioh by Kiyohiko Azuma.

Google Gemini API: For powering the AI capabilities.

Vite: For the development environment.

Google Fonts: For Rajdhani and Space Mono.

Font Awesome: For icons.

Enjoy chatting with Osaka!
