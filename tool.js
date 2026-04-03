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
const siteRoot = (form.dataset.siteRoot || '/').replace(/\/$/, '');

function normalizeMega(value) {
    return value.replace(/^https?:\/\/mega\.nz\/file\//i, '').trim();
}

function normalizeDrive(value) {
    const trimmed = value.trim();
    const match = trimmed.match(/[-\w]{25,}/);
    return match ? match[0] : trimmed;
}

function normalizeTelegram(value) {
    return value.trim().replace(/^\?/, '');
}

function setFieldError(message) {
    output.value = message;
    openBtn.removeAttribute('href');
    outputSection.style.display = 'block';
    output.focus();
    output.select();
}

function buildGeneratedUrl(baseUrl, params) {
    const search = new URLSearchParams();

    Object.entries(params).forEach(function ([key, value]) {
        if (value) search.set(key, value);
    });

    const query = search.toString();
    return query ? `${baseUrl}/?${query}` : `${baseUrl}/`;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const baseUrl = window.location.origin + siteRoot;
    const name = encodeBase64(nameInput.value.trim());
    const size = encodeBase64(sizeInput.value.trim());
    const desc = encodeBase64(descInput.value.trim());
    const mgValue = normalizeMega(mgInput.value);
    const gdValue = normalizeDrive(gdInput.value);
    const tgValue = normalizeTelegram(tgInput.value);

    if (gdInput.value.trim() && !/^[A-Za-z0-9_-]{10,}$/.test(gdValue)) {
        setFieldError('Enter a valid Google Drive file link or ID.');
        return;
    }

    const mg = encodeBase64(mgValue);
    const gd = encodeBase64(gdValue);
    const tg = encodeBase64(tgValue);

    const url = buildGeneratedUrl(baseUrl, {
        name: name,
        size: size,
        desc: desc,
        mg: mg,
        gd: gd,
        tg: tg
    });

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
