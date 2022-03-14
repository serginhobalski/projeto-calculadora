class CalcController {

    constructor(){

        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize(){

        let displayCalcEl = document.querySelector("#display");
        let dateCalcEl = document.querySelector("#data");
        let timeCalcEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
        dateCalcEl.innerHTML = "21/03/2022";
        timeCalcEl.innerHTML = "07:30";
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(value){
        this._displayCalc = value;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(value){
        this._currentDate = value;
    }
}