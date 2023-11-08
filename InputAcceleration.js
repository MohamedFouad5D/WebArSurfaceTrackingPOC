var eventAccelerationX = null;

function AddAccelerationEventX(objSource, msg) {
    if (eventAccelerationX == undefined) {
        eventAccelerationX = function (event) {
            var accelData = {
                alpha: event.alpha,
                beta: event.beta,
                gamma: event.gamma
            };
            if (accelData.beta > 90) {
                accelData.beta = 90;
            }
            if (accelData.beta < -90) {
                accelData.beta = -90;
            }
            accelData.beta += 90;
            accelData.gamma += 90;
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