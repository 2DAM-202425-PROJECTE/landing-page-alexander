import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

//########## SCRIPT DE CV ############//

// Gràfic de Llenguatges de Programació
const languageCtx = document.getElementById('languageChart').getContext('2d');
const languageChart = new Chart(languageCtx, {
    type: 'doughnut',
    data: {
        labels: ['JavaScript', 'Python', 'Java', 'C#', 'Others'],
        datasets: [{
            label: 'Llenguatges de Programació',
            data: [35, 25, 20, 10, 10],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#cc65fe', '#6bc3e0'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                onClick: (e) => e.stopPropagation() // Desactiva la interacció de clic
            }
        }
    }
});

// Gràfic d'Hores Invertides
const hoursCtx = document.getElementById('hoursChart').getContext('2d');
const hoursChart = new Chart(hoursCtx, {
    type: 'bar',
    data: {
        labels: ['JavaScript', 'Python', 'Java', 'C#', 'Others'],
        datasets: [{
            label: 'Hores Invertides',
            data: [300, 200, 150, 100, 50],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#cc65fe', '#6bc3e0']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                onClick: (e) => e.stopPropagation() // Desactiva la interacció de clic
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + ' hores';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gràfic d'Entorns de Desenvolupament
const devEnvCtx = document.getElementById('devEnvChart').getContext('2d');
const devEnvChart = new Chart(devEnvCtx, {
    type: 'polarArea',
    data: {
        labels: ['VSCode', 'IntelliJ', 'Atom', 'Eclipse'],
        datasets: [{
            label: 'Entorns de Desenvolupament',
            data: [60, 30, 5, 5],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#cc65fe'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                onClick: (e) => e.stopPropagation() // Desactiva la interacció de clic
            }
        }
    }
});

// Gràfic de Tecnologies Utilitzades
const techCtx = document.getElementById('techChart').getContext('2d');
const techChart = new Chart(techCtx, {
    type: 'pie',
    data: {
        labels: ['React', 'Node.js', 'Docker', 'Kubernetes'],
        datasets: [{
            label: 'Tecnologies',
            data: [35, 30, 20, 15],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#cc65fe'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                onClick: (e) => e.stopPropagation() // Desactiva la interacció de clic
            }
        }
    }
});

//############## FI SCRIPT CV ################//