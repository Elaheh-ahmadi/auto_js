let fahren = false;
const car = document.getElementById('car');

window.addEventListener('DOMContentLoaded', init);

function init() {
    // Set up initial state
    fahren = false;

    // Add event listeners for buttons (assuming buttons with ids 'start', 'stop', 'reset')
    document.getElementById('btn-drive').addEventListener('click', () => {
        fahren = true;
        drive();
    });

    document.getElementById('btn-stop').addEventListener('click', stop);
    document.getElementById('btn-reset').addEventListener('click', reset);

    car.style.marginLeft = 0;
}

function drive() {
    if (fahren) {
        // Driving logic here
        console.log('Driving...');
        // Move Car Forwards
        car.style.marginLeft = parseInt(car.style.marginLeft) + 1 + 'px';
        
        // Continue driving
        window.requestAnimationFrame(drive);
    }
}

function stop() {
    fahren = false;
    console.log('Stopped.');
}

function reset() {
    fahren = false;
    console.log('Reset.');
    car.style.marginLeft = 0;
}



