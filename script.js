const plants = [
    {
        name: "Jahe",
        image: "images/Jahe.jpg",
        info: "Jahe membantu mengatasi masuk angin dan meningkatkan imunitas."
    },
    {
        name: "Kunyit",
        image: "images/Kunyit.jpg",
        info: "Kunyit memiliki sifat anti-inflamasi dan baik untuk pencernaan."
    },
    {
        name: "Lidah Buaya",
        image: "images/LidahBuaya.jpg",
        info: "Lidah Buaya bermanfaat untuk perawatan kulit dan luka."
    },
    {
        name: "Temulawak",
        image: "images/Temulawak.jpg",
        info: "Temulawak mendukung kesehatan hati dan pencernaan."
    },
    {
        name: "Sereh",
        image: "images/Sereh.jpg",
        info: "Sereh digunakan sebagai penolak serangga dan relaksasi."
    },
    {
        name: "Daun Sirih",
        image: "images/Sirih.jpg",
        info: "Daun Sirih memiliki sifat antiseptik dan anti-bakteri."
    },
    {
        name: "Kemangi",
        image: "images/Kemangi.jpg",
        info: "Kemangi membantu mengurangi stres dan meningkatkan nafsu makan."
    },
    {
        name: "Kencur",
        image: "images/Kencur.jpg",
        info: "Kencur digunakan untuk mengatasi batuk dan sakit tenggorokan."
    },
    {
        name: "Beluntas",
        image: "images/Beluntas.jpg",
        info: "Beluntas digunakan untuk mengatasi bau badan."
    },
    {
        name: "Seledri",
        image: "images/Seledri.jpg",
        info: "Seledri membantu menjaga kesehatan ginjal dan jantung."
    },
    {
        name: "Daun Salam",
        image: "images/Salam.jpg",
        info: "Daun Salam bermanfaat untuk mengatasi diabetes dan kolesterol."
    },
    {
        name: "Sambiloto",
        image: "images/Sambiloto.jpg",
        info: "Sambiloto meningkatkan daya tahan tubuh dan anti-virus."
    }
];

const plantGrid = document.getElementById('plant-grid');

plants.forEach(plant => {
    const card = document.createElement('div');
    card.className = 'plant-card shadow-lg';
    card.innerHTML = `
        <img src="${plant.image}" alt="${plant.name}">
        <div class="p-6">
            <h3 class="mb-2">${plant.name}</h3>
            <p>${plant.info}</p>
        </div>
    `;
    plantGrid.appendChild(card);
});