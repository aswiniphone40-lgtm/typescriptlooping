/* for (let i = ; i >= 0; i--) {
    for (let star = 0; star < i; star++) {
        process.stdout.write("*");
    }
    console.log(); 
}*/

const max = 3;
 
for (let i = 1; i <= max; i++) {
    for (let star = 0; star < i; star++) {
        process.stdout.write("*");
    }
    console.log();
}

for (let i = max - 1; i >= 1; i--) {
    for (let star = 0; star < i; star++) {
        process.stdout.write("*");
    }
    console.log();
}
