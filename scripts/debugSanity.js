console.log("Env Vars starting with SANITY:");
Object.keys(process.env).forEach(key => {
    if (key.startsWith('SANITY')) {
        console.log(`${key}: ${key.includes('TOKEN') ? '***REDACTED***' : process.env[key]}`);
    }
});
