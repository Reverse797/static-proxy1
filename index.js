const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async event => {
    event.preventDefault();
    
    try {
        // 1. Register the Service Worker
        const registration = await window.navigator.serviceWorker.register('./sw.js', {
            scope: __uv$config.prefix
        });
        
        // 2. CRUCIAL FIX: Wait for the service worker to become fully active
        if (registration.installing) {
            await new Promise(resolve => {
                registration.installing.addEventListener('statechange', (e) => {
                    if (e.target.state === 'activated') resolve();
                });
            });
        }

        let url = input.value.trim();
        if (!isUrl(url)) {
            url = 'https://www.google.com/search?q=' + encodeURIComponent(url);
        } else if (!(url.startsWith('https://') || url.startsWith('http://'))) {
            url = 'http://' + url;
        }

        // 3. Navigate safely now that the proxy worker is active
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);

    } catch (err) {
        console.error("Proxy registration failed:", err);
        // Fallback or alert user instead of silently crashing with status 0
        alert("Proxy service worker is not ready yet. Please try again in a moment.");
    }
});



        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
