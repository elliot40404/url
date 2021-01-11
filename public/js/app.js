function copy() {
    const text = document.querySelector('#text');
    try {
        navigator.clipboard.writeText(text);
    } catch (e) {
        console.log(e);
        text.select();
        text.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }
}
function valid() {
    const val = document.getElementById('link').value;
    if (val.length >= 9) {
        document.getElementById('btnn').removeAttribute('disabled');
    }
}