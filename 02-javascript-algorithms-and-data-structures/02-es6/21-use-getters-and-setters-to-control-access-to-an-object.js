/* Alter code below this line */
class Thermostat {
    constructor(temperature){
        this._temperature = temperature;
    }

    set temperature(temperature){   
        this._temperature = temperature;
    }

    get temperature(){   
        return (5/9 * (this._temperature - 32));
    }

}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
