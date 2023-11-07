var eventAccelerationX = null;
function AddAccelerationEventX(objSource, msg)
{
    if(eventAccelerationX == undefined)
    {
        eventAccelerationX = function(event)
        {
            //console.log(event.acceleration.x + ' m/s2');
            unityInstance.SendMessage(objSource, msg, event.acceleration.x);
        }
    }
    window.addEventListener('devicemotion', eventAccelerationX);
}
function RemoveInputAccelerationEventX()
{
    if (eventAccelerationX != undefined)
    {
        window.removeEventListener('devicemotion', eventAccelerationX);
    }
}