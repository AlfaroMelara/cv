document.addEventListener("DOMContentLoaded", () => {
    fetch('certificates.json')
        .then(response => response.json())
        .then(data => {


            //---// LAW CERTS 1 //---//
            const lawCerts1 = data.filter(cert => cert.area === 1 && cert.type === 1);
            lawCerts1.sort((a, b) => new Date(b.date) - new Date(a.date));


            //---// LAW CERTS 2 //---//
            const lawCerts2 = data.filter(cert => cert.area === 1 && cert.type === 2);
            lawCerts2.sort((a, b) => new Date(b.date) - new Date(a.date));


            //---// LAW CERTS 3 //---//
            // FILTRADO
            const lawCerts3CaacrFiltered = data.filter(cert => {
                return cert.entity === "Colegio de Abogados y Abogadas de Costa Rica" && cert.hours > 3;
            });
            const lawCerts3OtherCerts = data.filter(cert => {
                return cert.entity !== "Colegio de Abogados y Abogadas de Costa Rica" && cert.area === 1 && cert.type === 3;
            });
            const lawCerts3 = [...lawCerts3CaacrFiltered, ...lawCerts3OtherCerts];
            lawCerts3.sort((a, b) => new Date(b.date) - new Date(a.date));


            //
            const certificatesOlTyp1 = document.getElementById('law-certificates-t1');
            lawCerts1.forEach(cert => {
                const certLi = document.createElement('li');
                certLi.classList.add('timeline-item');

                //FECHA
                const startDate = new Date(cert['start-date']);
                const expeditionDate = new Date(cert['expedition-date']);
                const options = { year: 'numeric', month: 'short' };
                let formattedStartDate = startDate.toLocaleDateString('es-ES', options);
                formattedStartDate = formattedStartDate.replace(/(?<=\b\w{3})/, '.');
                let formattedExpeditionDate = expeditionDate.toLocaleDateString('es-ES', options);
                formattedExpeditionDate = formattedExpeditionDate.replace(/(?<=\b\w{3})/, '.');
                const dateRange = `${formattedStartDate} - ${formattedExpeditionDate}`;

                //
                certLi.innerHTML = `
                <a href="${cert.link}" target="_blank" class="h4 timeline-item-title">${cert.prefix}, ${cert.genre}</a>
                <span>${dateRange}</span>
                <p class="timeline-text">${cert.entity}</p>`;
                certificatesOlTyp1.appendChild(certLi);
            });

            const certificatesOlTyp2 = document.getElementById('law-certificates-t2');
            lawCerts2.forEach(cert => {
                const certLi = document.createElement('li');
                certLi.classList.add('timeline-item');

                //FECHA
                const date = new Date(cert.date);
                const options = { year: 'numeric', month: 'short' };
                let formattedDate = date.toLocaleDateString('es-ES', options);
                formattedDate = formattedDate.replace(/(?<=\b\w{3})/, '.');

                //
                certLi.innerHTML = `
                <a href="${cert.link}" target="_blank" class="h4 timeline-item-title">${cert.title}</a>
                <span>${formattedDate}</span>
                <p class="timeline-text">${cert.entity}</p>`;
                certificatesOlTyp2.appendChild(certLi);
            });

            const certificatesOlTyp3 = document.getElementById('law-certificates-t3');
            lawCerts3.forEach(cert => {
                const certLi = document.createElement('li');
                certLi.classList.add('timeline-item');

                //FECHA
                const date = new Date(cert.date);
                const options = { year: 'numeric', month: 'short' };
                let formattedDate = date.toLocaleDateString('es-ES', options);
                formattedDate = formattedDate.replace(/(?<=\b\w{3})/, '.');

                //
                certLi.innerHTML = `
                <a href="${cert.link}" target="_blank" class="h4 timeline-item-title">${cert.title}</a>
                <span>${formattedDate}</span>
                <p class="timeline-text">${cert.entity}</p>`;
                certificatesOlTyp3.appendChild(certLi);
            });



        })
        .catch(error => {
            console.error('Error loading certificates:', error);
        });
});