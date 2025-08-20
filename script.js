// Enkel interaktivitet: logga klick på affiliate-länkar i konsolen
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        console.log(`Affiliate-länk klickad: ${link.href}`);
        // Här kan du senare skicka händelser till GA4 via GTM
    });
});