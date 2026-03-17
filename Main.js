// Participation Activity 2
function compute_usage() {
    let usage = Number(document.getElementById('usage').value);
switch (usage) {
        case "500":
            document.getElementById('display1').innerHTML = 'Very high Consumption';
            break;
        case "300":
            document.getElementById('display1').innerHTML = 'High Consumption';
            break;
        case "200":
            document.getElementById('display1').innerHTML = 'average Consumption';
            break;
         case "100":
            document.getElementById('display1').innerHTML = 'low Consumption';
            break;
        default:
            document.getElementById('display1').innerHTML = 'invalid Input. Try again';
            break;
    }
}