var eventAccelerationX = null;

function AddAccelerationEventX(objSource, msg) {
    if (eventAccelerationX == undefined) {
        eventAccelerationX = function (event) {
            var accelData = {
                alpha: event.alpha
                beta: event.beta,
                gamma: event.gamma
            };
            accelData.alpha = accelData.alpha < 0 ? accelData.alpha + 360 : accelData.alpha;
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