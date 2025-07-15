function downloadPDF() {
    const element = document.getElementById('cv-content');

    const opt = {
        margin: 0,
        filename: 'Hoja_de_vida_Andrea_Menjura.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            scrollX: 0,
            scrollY: 0,
            windowWidth: element.scrollWidth,  // Ajusta el tamaño de la "ventana" capturada
        },
        jsPDF: {
            unit: 'pt', // punto tipográfico (mejor precisión que mm)
            format: 'a4',
            orientation: 'portrait'
        },
        pagebreak: { mode: ['css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save();
}
