var eventAccelerationX = null;

function AddAccelerationEventX(objSource, msg) {
    if (eventAccelerationX == undefined) {
        eventAccelerationX = function (event) {
            var accelData = {
                alpha: event.alpha,
                beta: event.beta,
                gamma: event.gamma
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