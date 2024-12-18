document.addEventListener('DOMContentLoaded', function() {
    const publications = [
        {
            title: "LEACH protocol enhancement for increasing WSN lifetime",
            authors: "S. Nasr, M. Quwaider",
            publication: "11th International Conference on Information and Communication Systems, 2020",
            link: "https://ieeexplore.ieee.org/document/9491705/"
        },
        {
            title: "End-to-End Speech Recognition For Arabic Dialects",
            authors: "S. Nasr, R. Duwairi, M. Quwaider",
            publication: "Arabian Journal for Science and Engineering, 2023",
            link: "https://ouci.dntb.gov.ua/en/works/4OnpP3q7/"
        },
        {
            title: "Text-independent speaker recognition using deep neural networks",
            authors: "S. Nasr, M. Quwaider, R. Qureshi",
            publication: "International Conference on Information Technology, 2021",
            link: "https://ieeexplore.ieee.org/document/9491705/"
        },
        {
            title: "IndMask: Inductive Explanation for Multivariate Time Series Black-box Models",
            authors: "S. Nasr, S. Sikdar",
            publication: "ECAI conference, 2024",
            link: "#"
        }
    ];

    const publicationsList = document.getElementById('publications-list');

    publications.forEach(pub => {
        const listItem = document.createElement('li');
        listItem.className = 'publication';

        const title = document.createElement('h3');
        const titleLink = document.createElement('a');
        titleLink.href = pub.link;
        titleLink.textContent = pub.title;
        title.appendChild(titleLink);

        const authors = document.createElement('p');
        authors.innerHTML = `<strong>Authors:</strong> ${pub.authors}`;

        const publication = document.createElement('p');
        publication.innerHTML = `<strong>Publication:</strong> ${pub.publication}`;

        listItem.appendChild(title);
        listItem.appendChild(authors);
        listItem.appendChild(publication);

        publicationsList.appendChild(listItem);
    });
});
