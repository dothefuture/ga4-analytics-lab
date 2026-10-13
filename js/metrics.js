'use strict';

const sendEvent = (name, parameters = {}) => {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, {
    ...parameters,
    debug_mode: new URLSearchParams(window.location.search).get('debug_mode') === 'true'
  });
};

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    sendEvent('nav_click', {
      link_text: link.textContent.trim(),
      link_url: link.getAttribute('href')
    });
  });
});

document.querySelectorAll('[data-download-name]').forEach((link) => {
  link.addEventListener('click', () => {
    sendEvent('file_download_lab', {
      file_name: link.dataset.downloadName,
      file_extension: 'pdf'
    });
  });
});

document.querySelectorAll('[data-external-name]').forEach((link) => {
  link.addEventListener('click', () => {
    sendEvent('external_resource_click', {
      resource_name: link.dataset.externalName,
      link_domain: new URL(link.href).hostname
    });
  });
});

const campaign = new URLSearchParams(window.location.search);
if (campaign.has('utm_source')) {
  sendEvent('utm_visit', {
    campaign_source: campaign.get('utm_source') || 'not_set',
    campaign_medium: campaign.get('utm_medium') || 'not_set',
    campaign_name: campaign.get('utm_campaign') || 'not_set'
  });
}

window.setTimeout(() => {
  sendEvent('read_30s', { page_path: window.location.pathname });
}, 30000);

let scrollSent = false;
window.addEventListener('scroll', () => {
  if (scrollSent) return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll > 0 && window.scrollY / maxScroll >= 0.75) {
    scrollSent = true;
    sendEvent('scroll_75', { page_path: window.location.pathname });
  }
}, { passive: true });
