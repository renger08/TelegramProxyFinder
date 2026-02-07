const URL = 'https://raw.githubusercontent.com/SoliSpirit/mtproto/master/all_proxies.txt';
const COUNT = 20;

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function loadProxies() {
  fetch(URL + '?t=' + Date.now())
    .then(r => r.text())
    .then(text => {
      const list = text
        .split('\n')
        .map(l => l.trim())
        .filter(Boolean);

      shuffle(list);

      document.getElementById('proxyBox').textContent =
        list.slice(0, COUNT).join('\n');
    })
    .catch(() => {
      document.getElementById('proxyBox').textContent =
        'خطا در دریافت داده';
    });
}

loadProxies();

// function copyText() {
//   const text = document.getElementById('proxyBox').textContent;

//   if (navigator.clipboard && window.isSecureContext) {
//     navigator.clipboard.writeText(text)
//       .then(() => showToast('کپی شد ✅'))
//       .catch(() => fallbackCopy(text));
//   } else {
//     fallbackCopy(text);
//   }
// }

// function copyText() {
//   navigator.clipboard.writeText(
//     document.getElementById('proxyBox').textContent
//   );
// }

// function fallbackCopy(text) {
//   const textarea = document.createElement('textarea');
//   textarea.value = text;
//   textarea.style.position = 'fixed';
//   textarea.style.opacity = '0';
//   document.body.appendChild(textarea);
//   textarea.focus();
//   textarea.select();

//   try {
//     document.execCommand('copy');
//     showToast('کپی شد ✅');
//   } catch {
//     showToast('کپی ناموفق ❌');
//   }

//   document.body.removeChild(textarea);
// }

// function showToast(msg) {
//   alert(msg); // اگر خواستی بعداً toast واقعی می‌سازیم
// }

