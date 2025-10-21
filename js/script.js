// js/script.js
// Matrix Background
function createMatrix() {
    const matrixBg = document.getElementById('matrixBg');
    const chars = '01010101010101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for (let i = 0; i < 50; i++) {
        const code = document.createElement('div');
        code.className = 'matrix-code';
        code.textContent = chars[Math.floor(Math.random() * chars.length)];
        code.style.left = Math.random() * 100 + 'vw';
        code.style.animationDuration = (Math.random() * 10 + 5) + 's';
        code.style.animationDelay = Math.random() * 5 + 's';
        matrixBg.appendChild(code);
    }
}

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'light') {
            document.body.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
            document.body.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    });
}

// Tool Opening Functions
function openTool(url) {
    window.open(url, '_blank');
}

function showComingSoon() {
    alert('🚀 This tool is coming soon!\n📧 Contact us for early access');
}

function openWhatsappHide() {
    const apkLink = 'https://www.mediafire.com/file/de8hz1gsr4vq1zr/FAKE_WHATSAPP_1.0.apk/file';
    const videoLink = 'https://www.mediafire.com/file/6iyzysfys2726n1/VID-20230926-WA0000.mp4/file';
    
    if(confirm('WhatsApp Number Hide Tool\n\nAPK Download: Click OK\nVideo Tutorial: Click Cancel')) {
        window.open(apkLink, '_blank');
    } else {
        window.open(videoLink, '_blank');
    }
}

// Share Modal Functions
let shareModalShown = false;

function shareToolkit() {
    document.getElementById('shareModal').style.display = 'block';
    shareModalShown = true;
}

function shareSocial(platform) {
    const url = window.location.href;
    const text = 'Check out this amazing toolkit by Mr.Arslan! 26+ premium tools available.';
    
    let shareUrl = '';
    switch(platform) {
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
            break;
    }
    
    window.open(shareUrl, '_blank');
    setTimeout(() => {
        document.getElementById('shareModal').style.display = 'none';
    }, 1000);
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    alert('🔗 Link copied to clipboard!');
    setTimeout(() => {
        document.getElementById('shareModal').style.display = 'none';
    }, 1500);
}

// Auto Show Share Modal after 2 minutes
setTimeout(() => {
    if (!shareModalShown) {
        shareToolkit();
    }
}, 120000);

// Prevent closing modal by clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const shareModal = document.getElementById('shareModal');
    if (shareModal) {
        shareModal.addEventListener('click', function(e) {
            if (e.target === this) {
                return false;
            }
        });
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createMatrix();
});
