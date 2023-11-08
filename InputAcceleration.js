var eventAccelerationX = null;
function AddAccelerationEventX(objSource, msg)
{
    if(eventAccelerationX == undefined)
    {
        eventAccelerationX = function(event)
        {
            var accelData = {
                alpha: event.alpha,
                beta: event.beta,
                gamma: event.gamma      
            };
            gameInstance.SendMessage(objSource, msg, accelData);
        }
    }
    window.addEventListener('deviceorientation', eventAccelerationX);
}
function RemoveInputAccelerationEventX()
{
    if (eventAccelerationX != undefined)
    {
        window.removeEventListener('deviceorientation', eventAccelerationX);
    }
}