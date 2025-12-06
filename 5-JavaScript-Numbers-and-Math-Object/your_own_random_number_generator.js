function myRandom() {
    // Get current time in microseconds-like precision
    const now = Date.now(); 
    const perf = performance.now() * 1000; 
    
    // Mix the values to generate pseudo-randomness
    let seed = (now ^ perf) >>> 0; // XOR + force 32-bit
    
    // Linear Congruential Generator (LCG)
    seed = (seed * 1664525 + 1013904223) >>> 0;
    
    // Create number between 0 and 0.999999
    const sixDigit = seed % 1000000; // limit to 6 digits
    return sixDigit / 1000000;
}

console.log(myRandom());
