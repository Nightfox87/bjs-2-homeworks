class AlarmClock{
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error("Ошибка!");
        }
        if (this.alarmCollection.some((item) => item.id === id)) {
            console.error("Ошибка!");
        }
        this.alarmCollection.push({id, time, callback});
    }
    removeClock(id) {
        let index = this.alarmCollection.findIndex((item) => item.id === id);
        if (index != -1) {
            return this.alarmCollection.splice(index, 1)[0];
        }
        return null;
    }
    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    }
    start() {
        let checkClock = (clock) => {
            if (this.getCurrentFormattedTime() === clock.time) {
                clock.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(item => checkClock(item))
            });
        }
    }
    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach((item) => console.log(item.id, item.time));
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}

function testCase() {
    let alarm = new AlarmClock();
    let currentTime = alarm.getCurrentFormattedTime;

    alarm.addClock(
        currentTime,
        () => console.log("Пора вставать"),
        1);
    
    const addMinutes = (minutes) => {
        let time = new Date();
        return time.setTime(time.getTime() + minutes * 60000).slice(0,5);
    }
    alarm.addClock(
        addMinutes(1),
        () => {
            console.log("Давай, вставай уже!");
            alarm.removeClock(2);
        },
    2);
    alarm.addClock(
        addMinutes(2),
        () => {
            console.log("Вставай, а то проспишь!");
            alarm.stop();
            alarm.clearAlarms();
            alarm.printAlarms();
        },
    3);
    alarm.start();

}