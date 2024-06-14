document.addEventListener("DOMContentLoaded", () => {
    fetch('certificates.json')
        .then(response => response.json())
        .then(data => {


            //---// LAW CERTS 1 //---//
            const lawCerts1 = data.filter(cert => cert.area === 1 && cert.type === 1 && cert.hidden !== 1);
            lawCerts1.sort((a, b) => new Date(b.date) - new Date(a.date));


            const lawCertificatesOlTyp1 = document.getElementById('law-certificates-t1');
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
                lawCertificatesOlTyp1.appendChild(certLi);
            });

            //---// LAW CERTS 2 //---//
            const lawCerts2 = data.filter(cert => cert.area === 1 && cert.type === 2 && cert.hidden !== 1);
            lawCerts2.sort((a, b) => new Date(b.date) - new Date(a.date));


            const lawCertificatesOlTyp2 = document.getElementById('law-certificates-t2');
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
                lawCertificatesOlTyp2.appendChild(certLi);
            });

            //---// LAW CERTS 3 //---//
            // FILTRADO
            const lawCerts3CaacrFiltered = data.filter(cert => {
                return cert.entity === "Colegio de Abogados y Abogadas de Costa Rica" && cert.hours > 3 && cert.area === 1 && cert.type === 3;
            });
            const lawCerts3OtherCerts = data.filter(cert => {
                return cert.entity !== "Colegio de Abogados y Abogadas de Costa Rica" && cert.area === 1 && cert.type === 3;
            });
            const lawCerts3 = [...lawCerts3CaacrFiltered, ...lawCerts3OtherCerts];
            lawCerts3.sort((a, b) => new Date(b.date) - new Date(a.date));


            const lawCertificatesOlTyp3 = document.getElementById('law-certificates-t3');
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
                lawCertificatesOlTyp3.appendChild(certLi);
            });

            /////////////////////////////////////////////////////////////////////////////////////////////////////////
            //---// TECH CERTS 1 //---//
            const techCerts1 = data.filter(cert => cert.area === 2 && cert.type === 1 && cert.hidden !== 1);
            techCerts1.sort((a, b) => new Date(b.date) - new Date(a.date));


            const certificatesOlTtyp1 = document.getElementById('tech-certificates-t1');
            techCerts1.forEach(cert => {
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
                certificatesOlTtyp1.appendChild(certLi);
            });

            //---// TECH CERTS 2 //---//
            const techCerts2 = data.filter(cert => cert.area === 2 && cert.type === 2 && cert.hidden !== 1);
            techCerts2.sort((a, b) => new Date(b.date) - new Date(a.date));


            const certificatesOlTtyp2 = document.getElementById('tech-certificates-t2');
            techCerts2.forEach(cert => {
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
                certificatesOlTtyp2.appendChild(certLi);
            });

            //---// TECH CERTS 3 //---//
            const techCerts3 = data.filter(cert => cert.area === 2 && cert.type === 3 && cert.hidden !== 1);
            techCerts3.sort((a, b) => new Date(b.date) - new Date(a.date));


            const certificatesOlTtyp3 = document.getElementById('tech-certificates-t3');
            techCerts3.forEach(cert => {
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
                certificatesOlTtyp3.appendChild(certLi);
            });

            /////////////////////////////////////////////////////////////////////////////////////////////////////////

            //---// OTHERS CERTS 1 //---//
            const othersCerts1 = data.filter(cert => cert.area === 3 && cert.type === 1 && cert.hidden !== 1);
            othersCerts1.sort((a, b) => new Date(b.date) - new Date(a.date));


            const certificatesOlOtyp1 = document.getElementById('others-certificates-t1');
            othersCerts1.forEach(cert => {
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
                certificatesOlOtyp1.appendChild(certLi);
            });

            //---// OTHERS CERTS 2 //---//
            const othersCerts2 = data.filter(cert => cert.area === 3 && cert.type === 2 && cert.hidden !== 1);
            othersCerts2.sort((a, b) => new Date(b.date) - new Date(a.date));


            const certificatesOlOtyp2 = document.getElementById('others-certificates-t2');
            othersCerts2.forEach(cert => {
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
                certificatesOlOtyp2.appendChild(certLi);
            });

            //---// OTHERS CERTS 3 //---//
            const othersCerts3 = data.filter(cert => cert.area === 3 && cert.type === 3 && cert.hidden !== 1);
            othersCerts3.sort((a, b) => new Date(b.date) - new Date(a.date));


            const certificatesOlOtyp3 = document.getElementById('others-certificates-t3');
            othersCerts3.forEach(cert => {
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
                certificatesOlOtyp3.appendChild(certLi);
            });

            /////////////////////////////////////////////////////////////////////////////////////////////////////////

        })
        .catch(error => {
            console.error('Error loading certificates:', error);
        });
});