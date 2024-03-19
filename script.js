document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('grafica').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'f(x)',
                borderColor: 'rgb(75, 192, 192)',
                data: []
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });

    // Función para graficar
    window.graficarFuncion = function (func) {
        let datos = [];
        for (let x = -10; x <= 10; x += 0.5) {
            try {
                let y = eval(func.replace(/x/g, '('+x+')'));
                datos.push({x: x, y: y});
            } catch (error) {
                console.error("Error al evaluar la función", error);
            }
        }
        chart.data.datasets[0].data = datos;
        chart.update();
    };

    // Graficar una función de ejemplo al cargar
    graficarFuncion('Math.sin(x)');
});