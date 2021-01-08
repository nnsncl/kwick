// https://medium.com/tinyso/how-to-detect-inactive-user-to-auto-logout-by-using-idle-timeout-in-javascript-react-angular-and-b6279663acf2
class IdleTimer {
    constructor({ timeout, onTimeout, onExpired }) {
        this.timeout = timeout;
        this.onTimeout = onTimeout;

        // Check the class constructor for the the initial state if we have the expiredTime value in localStorage, we immediately call onExpired callback and then stop the execution.
        const expiredTime = parseInt(localStorage.getItem("_expiredTime"), 10);
        if (expiredTime > 0 && expiredTime < Date.now()) {
            onExpired();
            return;
        }

        this.eventHandler = this.updateExpiredTime.bind(this);
        this.tracker();
        this.startInterval();
    }

    startInterval() {
        this.updateExpiredTime();

        // The interval logic to track every 1000 milliseconds (1 second).
        this.interval = setInterval(() => {

            // Get the expiredTime from localStorage
            const expiredTime = parseInt(localStorage.getItem("_expiredTime"), 10);

            // 5rack if the current time is over the expired time.
            if (expiredTime < Date.now()) {
                if (this.onTimeout) {
                    this.onTimeout();
                    this.cleanUp();
                }
            }
        }, 1000);
    }

    //  Calculate new expired time then store to _expiredTime in localStorage. We have the value of this.timeout from the constructor.
    updateExpiredTime() {
        if (this.timeoutTracker) {
            clearTimeout(this.timeoutTracker);
        }
        this.timeoutTracker = setTimeout(() => {
            localStorage.setItem("_expiredTime", Date.now() + this.timeout * 1000);
        }, 300);
    }

    // Add the event listeners to track user interaction with mousemove, scroll, and keydown event.
    tracker() {
        window.addEventListener("mousemove", this.eventHandler);
        window.addEventListener("scroll", this.eventHandler);
        window.addEventListener("keydown", this.eventHandler);
    }

    // remove evey event listeners
    cleanUp() {
        localStorage.removeItem("_expiredTime");
        clearInterval(this.interval);
        window.removeEventListener("mousemove", this.eventHandler);
        window.removeEventListener("scroll", this.eventHandler);
        window.removeEventListener("keydown", this.eventHandler);
    }
}
export default IdleTimer;
