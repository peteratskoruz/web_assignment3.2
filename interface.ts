
/**creating interface
 * that implements class**/


interface Drivable{

    // Start the car's ignition so that it can drive.
    start(): void;
    // Attempt to drive a distance. Returns true or false based on whether or not the drive was successful.
    drive(distance: number): boolean;
    // Give the distance from the start.
    getPosition(): number;

}

class Car implements Drivable{

    private _isRunning: boolean;

    private  _distanceFromStart: number;

    constructor() {
        this._isRunning = false;
        this._distanceFromStart = 0;
    }

    public start(){
        this._isRunning = true;
    }

    public drive(distance: number): boolean {

        if(this._isRunning){

            this._distanceFromStart += distance;

            return true;
        }

        return false;
    }

    public getPosition(){

        return this._distanceFromStart;

    }



}