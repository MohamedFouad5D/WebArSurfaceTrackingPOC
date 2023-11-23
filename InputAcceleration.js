var eventAccelerationX = null;

function AddAccelerationEventX(objSource, msg) {
    if (eventAccelerationX == undefined) {
        eventAccelerationX = function (event) {
            var accelData = {
                alpha: event.rotationRate.alpha,
                beta: event.rotationRate.beta,
                gamma: event.rotationRate.gamma
            };
          
            var data = JSON.stringify(accelData);
            gameInstance.SendMessage(objSource, msg, data);
        }
    }
    window.addEventListener('deviceorientation', eventAccelerationX);
}

function RemoveInputAccelerationEventX() {
    if (eventAccelerationX != undefined) {
        window.removeEventListener('deviceorientation', eventAccelerationX);
    }
}