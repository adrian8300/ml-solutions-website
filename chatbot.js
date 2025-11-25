// Chatbot Knowledge Base
const knowledgeBase = {
    // Color scheme and theme
    colors: {
        keywords: ['color', 'colors', 'theme', 'neon', 'cyan', 'magenta', 'purple', 'gradient'],
        answer: `The website uses a vibrant neon tech theme with:
- Primary: Cyan (#00ffff) for main accents
- Secondary: Magenta (#ff00ff) for contrast
- Accent: Neon green (#00ff88) for highlights
- Backgrounds: Deep purple/black (#0d0221, #050014, #1a0b2e)
- Text: White (#ffffff) and light purple (#b8b8ff)

The colors create a cyberpunk-inspired aesthetic with multiple neon glow effects!`
    },

    animations: {
        keywords: ['animation', 'animated', 'move', 'floating', 'particles', 'glow', 'pulse'],
        answer: `The website has many fun animations:
- Floating particles: 10 colored particles that rise and rotate across the screen
- Pulsing background: Radial gradients that breathe slowly
- Glowing logo: Neon effect that intensifies and dims
- Floating title: Subtle vertical motion on hero text
- Bouncing icons: Feature icons rotate and bounce
- Button effects: Scale and glow on hover
- Number pulses: Step indicators pulse and scale

All animations use CSS keyframes for smooth performance!`
    },

    tech: {
        keywords: ['technology', 'built', 'made', 'stack', 'framework', 'tools', 'code'],
        answer: `The website is built with:
- Pure HTML5 for structure
- Vanilla CSS3 for all styling and animations
- Vanilla JavaScript for interactivity
- NO frameworks or build tools!

It's a static site that uses:
- CSS custom properties (variables) for theming
- CSS Grid and Flexbox for layouts
- CSS animations and transitions
- Modern ES6+ JavaScript`
    },

    particles: {
        keywords: ['particle', 'dots', 'background effects'],
        answer: `The floating particles are created with:
- 10 div elements with class "particle"
- Positioned absolutely across the screen
- Each has different colors (cyan, magenta, green)
- CSS animation moves them from bottom to top
- They rotate 720 degrees while floating
- Different animation delays create staggered effect
- Neon glow shadows on each particle

The animation is 20 seconds long and loops infinitely!`
    },

    buttons: {
        keywords: ['button', 'buttons', 'interactive', 'click', 'hover'],
        answer: `Buttons have elaborate hover effects:
- Gradient backgrounds (cyan to magenta to green)
- Neon glow shadows that intensify on hover
- Scale transform (1.05x) on hover
- Ripple effect using ::before pseudo-element
- Pulse animation on certain buttons
- Bold fonts and rounded corners

The red "DO NOT CLICK" button even shakes!`
    },

    forms: {
        keywords: ['form', 'contact', 'input', 'submit', 'formsubmit'],
        answer: `The contact form uses FormSubmit.co:
- No backend server needed!
- Form action points to FormSubmit hash
- Submissions are emailed automatically
- Uses hidden fields for configuration
- Redirects back with success parameter
- JavaScript detects success and shows message
- Form inputs have neon glow on focus`
    },

    responsive: {
        keywords: ['mobile', 'responsive', 'phone', 'tablet', 'breakpoint'],
        answer: `The site is fully responsive:
- CSS media queries at 768px and 480px breakpoints
- Hamburger menu appears on mobile
- Grid layouts collapse to single column
- Font sizes scale down appropriately
- Touch-friendly button sizes
- Navigation becomes vertical dropdown
- Maintains all animations on mobile!`
    },

    navbar: {
        keywords: ['navigation', 'navbar', 'menu', 'nav', 'header'],
        answer: `The navigation bar features:
- Glassmorphism effect (backdrop-filter blur)
- Sticky positioning (stays at top when scrolling)
- Multi-color neon glow shadow
- Animated underlines on links (grows on hover)
- Glowing animated logo
- Mobile hamburger menu
- Red glowing "DO NOT CLICK" link!

It's transparent with 90% opacity for a modern look.`
    },

    jokes: {
        keywords: ['joke', 'rachel', 'do not click', 'secret', 'funny', 'animal'],
        answer: `The DO NOT CLICK page is a silly Easter egg!
- 15 random joke questions about Rachel
- 25 different random animals for answers
- State machine tracks: initial → question → answer → repeat
- Big red shaking button to start
- Reveal button shows "Because Rachel is a [animal]!"
- JavaScript randomizes both questions and animals
- Animations on all buttons for extra fun!`
    },

    hosting: {
        keywords: ['deploy', 'host', 'github', 'pages', 'live', 'url'],
        answer: `The site is hosted on GitHub Pages:
- Completely free hosting!
- Automatic deployment from master branch
- Changes pushed to git go live in ~1 minute
- Custom domain support available
- Built-in SSL certificate
- Global CDN for fast loading
- No server configuration needed!`
    },

    cards: {
        keywords: ['card', 'cards', 'feature', 'box', 'container'],
        answer: `The cards have fancy effects:
- Purple gradient overlay backgrounds
- Border that glows on hover (cyan/magenta)
- Lift and scale transform on hover
- Sliding light effect (::before pseudo-element)
- Shadow that intensifies when hovered
- Rounded corners (12px border-radius)
- All use the same base styles!`
    },

    chatbot: {
        keywords: ['chatbot', 'chat', 'bot', 'this', 'you', 'assistant'],
        answer: `I'm a custom chatbot built with vanilla JavaScript!
- Keyword matching system to understand questions
- Knowledge base with 12 different topics
- Floating button to open/close chat
- Scrollable message history
- Smooth animations for messages
- Purple/cyan themed to match the site
- All client-side - no AI API needed!

I can answer questions about colors, animations, tech stack, forms, hosting, and more. Try asking "How were the particles made?" or "What colors does the site use?"`
    }
};

// Chatbot state
let chatHistory = [];
let isOpen = false;

// DOM elements will be set after initialization
let chatContainer, chatMessages, chatInput, chatButton, chatClose;

function initChatbot() {
    // Create chatbot HTML
    const chatbotHTML = `
        <div id="chatbot-button" class="chatbot-button">
            <span>💬</span>
        </div>

        <div id="chatbot-container" class="chatbot-container hidden">
            <div class="chatbot-header">
                <h3>🤖 Dev Assistant</h3>
                <button id="chatbot-close" class="chatbot-close">×</button>
            </div>
            <div id="chatbot-messages" class="chatbot-messages">
                <div class="bot-message">
                    Hi! I'm the Dev Assistant! Ask me anything about how this website was built!
                    <br><br>
                    Try asking:
                    <br>• "What colors does the site use?"
                    <br>• "How do the animations work?"
                    <br>• "What tech stack was used?"
                    <br>• "Tell me about the particles"
                </div>
            </div>
            <div class="chatbot-input-container">
                <input type="text" id="chatbot-input" class="chatbot-input" placeholder="Ask about the website...">
                <button id="chatbot-send" class="chatbot-send">Send</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatbotHTML);

    // Get DOM elements
    chatContainer = document.getElementById('chatbot-container');
    chatMessages = document.getElementById('chatbot-messages');
    chatInput = document.getElementById('chatbot-input');
    chatButton = document.getElementById('chatbot-button');
    chatClose = document.getElementById('chatbot-close');
    const chatSend = document.getElementById('chatbot-send');

    // Event listeners
    chatButton.addEventListener('click', toggleChat);
    chatClose.addEventListener('click', toggleChat);
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

function toggleChat() {
    isOpen = !isOpen;
    chatContainer.classList.toggle('hidden');
    chatButton.classList.toggle('hidden');

    if (isOpen) {
        chatInput.focus();
    }
}

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';

    // Find answer
    setTimeout(() => {
        const answer = findAnswer(message);
        addMessage(answer, 'bot');
    }, 500);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageDiv.textContent = text;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Animate in
    setTimeout(() => {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
    }, 10);
}

function findAnswer(question) {
    const lowerQuestion = question.toLowerCase();

    // Check each knowledge base topic
    for (const topic in knowledgeBase) {
        const { keywords, answer } = knowledgeBase[topic];

        // Check if any keyword matches
        if (keywords.some(keyword => lowerQuestion.includes(keyword))) {
            return answer;
        }
    }

    // Default response
    return `Hmm, I'm not sure about that! Try asking about:
• Colors and theme
• Animations and effects
• Technology stack
• Particles and backgrounds
• Buttons and interactions
• Forms and contact
• Mobile responsiveness
• Navigation bar
• The secret joke page
• Hosting and deployment
• Cards and styling
• Or ask about me (the chatbot)!`;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
} else {
    initChatbot();
}
