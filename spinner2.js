let frameDelay = 200;
const animFrames = ['|', '/', '-', '\\'];
const timeout = frameDelay * animFrames.length;

const animLoopID = setInterval(() => {
    for (let i = 0; i < animFrames.length; i++) {
        setTimeout(() => {
            process.stdout.write(`\r ${animFrames[i]}   `);
        }, frameDelay * i);
    }
}, timeout);

setTimeout(() => {
    clearInterval(animLoopID);
    process.stdout.write('\n');
}, 4000);