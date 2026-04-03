function encodeBase64(str) {
    try {
        return btoa(unescape(encodeURIComponent(str || '')));
    } catch (e) {
        return '';
    }
}

const form = document.getElementById('generateForm');
const outputSection = document.getElementById('outputSection');
const output = document.getElementById('output');
const copyBtn = document.getElementById('copyBtn');
const openBtn = document.getElementById('openBtn');
const clearBtn = document.getElementById('clearBtn');
const nameInput = document.getElementById('name');
const sizeInput = document.getElementById('size');
const descInput = document.getElementById('desc');
const mgInput = document.getElementById('mg');
const gdInput = document.getElementById('gd');
const tgInput = document.getElementById('tg');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const baseUrl = window.location.origin + '{{ "/" | relative_url }}'.replace(/\/$/, '');
    const name = encodeBase64(nameInput.value.trim());
    const size = encodeBase64(sizeInput.value.trim());
    const desc = encodeBase64(descInput.value.trim());
    const mg = encodeBase64(mgInput.value.trim());
    const gd = encodeBase64(gdInput.value.trim());
    const tg = encodeBase64(tgInput.value.trim());

    const url = `${baseUrl}/?name=${name}&size=${size}&desc=${desc}&mg=${mg}&gd=${gd}&tg=${tg}`;

    output.value = url;
    openBtn.href = url;
    openBtn.setAttribute('aria-label', 'Open generated link in a new tab');
    outputSection.style.display = 'block';
    output.focus();
    output.select();
});

copyBtn.addEventListener('click', async function () {
    const val = output.value || '';
    if (!val) return;
    try {
        await navigator.clipboard.writeText(val);
        const prev = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = prev, 1200);
    } catch (err) {
        output.select();
        try { document.execCommand('copy'); } catch (e) { }
    }
});

clearBtn.addEventListener('click', function () {
    form.reset();
    output.value = '';
    openBtn.removeAttribute('href');
    outputSection.style.display = 'none';
});

output.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && output.value) {
        window.open(output.value, '_blank', 'noopener,noreferrer');
    }
});
