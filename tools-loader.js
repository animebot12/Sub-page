// js/tools-loader.js
const toolsData = [
    {
        "id": "sms-bomber",
        "name": "SMS Bomber Pro", 
        "description": "Advanced bulk SMS sending platform",
        "url": "./tools/sms-bomber/index.html",
        "icon": "fas fa-comment-sms",
        "color": "sms-boomer",
        "status": "active"
    },
    {
        "id": "tiktok-downloader",
        "name": "TikTok Video Downloader",
        "description": "Download videos without watermark", 
        "url": "./tools/tiktok-downloader/index.html",
        "icon": "fab fa-tiktok",
        "color": "tiktok",
        "status": "active"
    },
    {
        "id": "instagram-saver",
        "name": "Instagram Content Saver",
        "description": "Download photos, reels & stories",
        "url": "#",
        "icon": "fab fa-instagram", 
        "color": "instagram",
        "status": "coming-soon"
    },
    {
        "id": "facebook-downloader",
        "name": "Facebook Video Downloader",
        "description": "Download FB videos & content",
        "url": "#",
        "icon": "fab fa-facebook",
        "color": "facebook", 
        "status": "coming-soon"
    },
    {
        "id": "youtube-downloader",
        "name": "YouTube HD Downloader", 
        "description": "Download videos in HD quality",
        "url": "./tools/youtube-downloader/index.html",
        "icon": "fab fa-youtube",
        "color": "youtube",
        "status": "active"
    },
    {
        "id": "ai-assistant",
        "name": "AI Assistant Pro",
        "description": "Smart AI powered helper", 
        "url": "./tools/ai-assistant/index.html",
        "icon": "fas fa-brain",
        "color": "ai-assistant",
        "status": "active"
    },
    {
        "id": "whatsapp-unban",
        "name": "WhatsApp Unban Service", 
        "description": "Recover banned accounts",
        "url": "./tools/whatsapp-unban/index.html",
        "icon": "fab fa-whatsapp",
        "color": "whatsapp",
        "status": "active"
    },
    {
        "id": "website-attacker", 
        "name": "Website Attacker",
        "description": "Security testing toolkit",
        "url": "./tools/website-attacker/index.html",
        "icon": "fas fa-shield-alt",
        "color": "security",
        "status": "active"
    },
    {
        "id": "html-encryptor",
        "name": "HTML Code Encryptor", 
        "description": "Encrypt HTML code securely",
        "url": "./tools/html-encryptor/index.html",
        "icon": "fas fa-lock",
        "color": "hack",
        "status": "active"
    },
    {
        "id": "fancy-text",
        "name": "Fancy Text Designer",
        "description": "Create stylish text designs", 
        "url": "./tools/fancy-text/index.html",
        "icon": "fas fa-font",
        "color": "tool",
        "status": "active"
    },
    {
        "id": "virtual-phone",
        "name": "Virtual Phone Number",
        "description": "Temporary phone numbers",
        "url": "./tools/virtual-phone/index.html", 
        "icon": "fas fa-phone",
        "color": "phone",
        "status": "active"
    },
    {
        "id": "text-to-file",
        "name": "Text to File Converter",
        "description": "Convert text to files",
        "url": "./tools/text-to-file/index.html",
        "icon": "fas fa-file-code", 
        "color": "file",
        "status": "active"
    },
    {
        "id": "whatsapp-hide",
        "name": "Whatsapp Number Hide", 
        "description": "Hide your number securely",
        "url": "./tools/whatsapp-hide/index.html",
        "icon": "fas fa-user-secret",
        "color": "security",
        "status": "active"
    }
];

function loadTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    
    if (!toolsGrid) return;
    
    toolsGrid.innerHTML = '';
    
    toolsData.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        
        let onClickCode = '';
        if (tool.status === 'active') {
            onClickCode = `openTool('${tool.url}')`;
        } else {
            onClickCode = 'showComingSoon()';
        }
        
        toolCard.setAttribute('onclick', onClickCode);
        
        toolCard.innerHTML = `
            <div class="tool-icon ${tool.color}"><i class="${tool.icon}"></i></div>
            <div class="tool-name">${tool.name}</div>
            <div class="tool-desc">${tool.description}</div>
            ${tool.status === 'coming-soon' ? '<div class="coming-soon-badge">Coming Soon</div>' : ''}
        `;
        
        toolsGrid.appendChild(toolCard);
    });
}

// Page load par tools load karo
document.addEventListener('DOMContentLoaded', function() {
    loadTools();
});
