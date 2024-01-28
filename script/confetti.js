function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert('скопировано успешно');
}

// Check if the URL contains "?donepay"
if (window.location.href.includes("?donepay")) {
    alert('Спасибо за донат!');
    createConfetti();
}

function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);

    const confettiColors = ['#f00', '#00f', '#0f0', '#ff0', '#f0f'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 1) + 's';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confettiContainer.appendChild(confetti);
    }

    for (let i = 0; i < 50; i++) {
        const staticConfetti = document.createElement('div');
        staticConfetti.classList.add('static-confetti');
        staticConfetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        staticConfetti.style.left = Math.random() * window.innerWidth + 'px';
        staticConfetti.style.top = Math.random() * window.innerHeight + 'px';
        document.body.appendChild(staticConfetti);
    }

    // Remove confetti after 5 seconds
    setTimeout(() => {
        confettiContainer.remove();
        document.querySelectorAll('.static-confetti').forEach((element) => {
            element.remove();
        });
    }, 5000);
}