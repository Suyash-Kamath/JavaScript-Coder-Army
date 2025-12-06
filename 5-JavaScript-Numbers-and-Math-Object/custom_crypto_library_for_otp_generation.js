const crypto = require("crypto");
const os = require("os");
const fs = require("fs");

let OTP_COUNTER = 0;

function getSystemEntropy() {
    const data = [];

    // High-res timestamps
    data.push(process.hrtime.bigint().toString());
    data.push(Date.now().toString());

    // OS info
    data.push(os.hostname());
    data.push(os.platform());
    data.push(os.release());
    data.push(os.arch());
    data.push(os.cpus().length.toString());

    // System stats
    data.push(os.freemem().toString());
    data.push(os.totalmem().toString());
    data.push(os.uptime().toString());
    data.push(process.uptime().toString());

    // Load average
    data.push(JSON.stringify(os.loadavg()));

    // Memory usage
    data.push(JSON.stringify(process.memoryUsage()));

    // Random internal counters
    OTP_COUNTER++;
    data.push(OTP_COUNTER.toString());

    // Add random jitter
    data.push((Math.random() * 1000000000000).toString());

    // Try reading file metadata (adds more entropy)
    try {
        const stats = fs.statSync(__filename);
        data.push(stats.mtimeMs.toString());
        data.push(stats.size.toString());
    } catch (_) {}

    return data.join("|");
}

// Secure hash
function sha256(input) {
    return crypto.createHash("sha256").update(input).digest();
}

// Generate OTP
function generateOTP(length = 6) {

    // Add strong crypto bytes + system entropy
    const entropy = Buffer.concat([
        crypto.randomBytes(32),
        sha256(getSystemEntropy())
    ]);

    // Convert bytes → numeric OTP
    let otp = "";
    for (let i = 0; otp.length < length; i++) {
        const byte = entropy[i % entropy.length];
        const digit = byte % 10;
        otp += digit.toString();
    }
    
    return otp;
}

/* ------------------ USAGE ------------------ */

console.log("OTP:", generateOTP(6));
console.log("OTP (8 digits):", generateOTP(8));
