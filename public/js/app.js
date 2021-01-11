const copy = document.getElementById('copy').innerText
(async () => {
    await navigator.clipboard.writeText(copy);
})();