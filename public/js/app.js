const copy = document.getElementById('copy').innerText
    (async () => {
        await navigator.clipboard.writeText(copy);
        window.alert(`URL copied: ${copy}`)
    })();