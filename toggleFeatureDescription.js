// toggleFeatureDescription.js
// Este script alterna la visibilidad del segundo <p> y cambia la imagen de flecha

// toggleFeatureDescription.js
// Alterna la visibilidad de los textos ocultos y cambia la flecha en cada par

document.addEventListener('DOMContentLoaded', function() {
    const featureTitles = document.querySelectorAll('.toggle-feature');
    const featureDescs = document.querySelectorAll('.toggle-feature-desc');

    featureTitles.forEach((title, i) => {
        const arrowImg = title.querySelector('.toggle-feature-arrow');
        const desc = featureDescs[i];
        desc.style.display = 'none';
        arrowImg.src = '/public/flecha_down.png';
        arrowImg.style.cursor = 'pointer';
        arrowImg.addEventListener('click', function() {
            if (desc.style.display === 'none') {
                desc.style.display = 'block';
                arrowImg.src = '/public/flecha_up.png';
            } else {
                desc.style.display = 'none';
                arrowImg.src = '/public/flecha_down.png';
            }
        });
    });
});
