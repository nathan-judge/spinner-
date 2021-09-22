let delay = 200;

for (let i = 0; i < 100; i++) {
    setTimeout(() => {
        process.stdout.write('\r |   ');
    }, delay + (i * 1000));
    setTimeout(() => {
        process.stdout.write('\r /   ');
    }, 2 * delay + (i * 1000));
    setTimeout(() => {
        process.stdout.write('\r -   ');
    }, 3 * delay + (i * 1000));
    setTimeout(() => {
        process.stdout.write('\r \\   ');
    }, 4 * delay + (i * 1000));
    setTimeout(() => {
        process.stdout.write('\r |   ');
    }, 5 * delay + (i * 1000));
}