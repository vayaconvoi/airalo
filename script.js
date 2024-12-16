const translations = {
    en: {
        title: "Get a €3 Coupon for Airalo eSIM",
        description: "New users get $3 in credits on Airalo.",
        buttonText: "Get Your Coupon by Clicking Here",
        benefitsTitle: "Benefits of Airalo eSIM",
        benefits: [
            "Instant connectivity without physical SIM cards.",
            "Affordable data packages worldwide.",
            "Easy to manage through the Airalo app.",
            "Keep your existing number active."
        ]
    },
    es: {
        title: "Obtenga un cupón de $3 en creditos para Airalo eSIM",
        description: "Los nuevos usuarios obtienen €3 de descuento en su primera compra en Airalo.",
        buttonText: "Obtén tu cupón haciendo clic aquí",
        benefitsTitle: "Beneficios de Airalo eSIM",
        benefits: [
            "Conectividad instantánea sin tarjetas SIM físicas.",
            "Paquetes de datos asequibles en todo el mundo.",
            "Fácil de administrar a través de la aplicación Airalo.",
            "Mantén tu número existente activo."
        ]
    },
    pt: {
        title: "Obtenha um cupom de $3 em crédito para Airalo eSIM",
        description: "Novos usuários ganham €3 de desconto na primeira compra na Airalo.",
        buttonText: "Obtenha seu cupom clicando aqui",
        benefitsTitle: "Benefícios do Airalo eSIM",
        benefits: [
            "Conectividade instantânea sem chips físicos.",
            "Pacotes de dados acessíveis em todo o mundo.",
            "Fácil de gerenciar pelo app da Airalo.",
            "Mantenha seu número existente ativo."
        ]
    },
    fr: {
        title: "Obtenez un coupon de $3 pour Airalo eSIM",
        description: "Les nouveaux utilisateurs bénéficient de 3 € de réduction sur leur premier achat sur Airalo.",
        buttonText: "Obtenez votre coupon en cliquant ici",
        benefitsTitle: "Avantages de Airalo eSIM",
        benefits: [
            "Connectivité instantanée sans cartes SIM physiques.",
            "Forfaits de données abordables dans le monde entier.",
            "Facile à gérer via l'application Airalo.",
            "Gardez votre numéro existant actif."
        ]
    }
};
function setLanguage(lang) {
    const t = translations[lang];
    document.getElementById('title').innerText = t.title;
    document.getElementById('description').innerText = t.description;
    document.getElementById('coupon-link').innerText = t.buttonText;
    document.getElementById('benefits-title').innerText = t.benefitsTitle;
    const benefitsList = document.getElementById('benefits-list');
    benefitsList.innerHTML = '';
    t.benefits.forEach(benefit => {
        const div = document.createElement('div');
        div.className = 'benefit';
        div.innerText = benefit;
        benefitsList.appendChild(div);
    });
}
window.onload = function() {
    setLanguage('en');
}