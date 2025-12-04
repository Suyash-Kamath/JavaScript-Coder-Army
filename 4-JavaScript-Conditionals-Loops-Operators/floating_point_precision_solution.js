function addDecimalStrings(a, b) {
    // Split integer & fractional parts
    let [aInt, aFrac = ""] = a.split(".");
    let [bInt, bFrac = ""] = b.split(".");

    // Pad fractional parts (right side)
    const maxFrac = Math.max(aFrac.length, bFrac.length);
    aFrac = aFrac.padEnd(maxFrac, "0");
    bFrac = bFrac.padEnd(maxFrac, "0");

    // Pad integer parts (left side)
    const maxInt = Math.max(aInt.length, bInt.length);
    aInt = aInt.padStart(maxInt, "0");
    bInt = bInt.padStart(maxInt, "0");

    // Add fractional part (right → left)
    let carry = 0;
    let fracResult = "";
    for (let i = maxFrac - 1; i >= 0; i--) {
        const sum = parseInt(aFrac[i]) + parseInt(bFrac[i]) + carry;
        fracResult = (sum % 10) + fracResult;
        carry = Math.floor(sum / 10);
    }

    // Add integer part (right → left)
    let intResult = "";
    for (let i = maxInt - 1; i >= 0; i--) {
        const sum = parseInt(aInt[i]) + parseInt(bInt[i]) + carry;
        intResult = (sum % 10) + intResult;
        carry = Math.floor(sum / 10);
    }

    // Handle leftover carry
    if (carry > 0) intResult = carry + intResult;

    // Remove trailing zeros in fractional & remove dot if no fractional part left
    fracResult = fracResult.replace(/0+$/, "");

    return fracResult.length > 0 ? `${intResult}.${fracResult}` : intResult;
}

// Test
console.log(addDecimalStrings("0.1", "0.2"));  // "0.3"
console.log(addDecimalStrings("1.005", "0.005"));  // "1.01"
console.log(addDecimalStrings("99.9", "0.1"));  // "100"
