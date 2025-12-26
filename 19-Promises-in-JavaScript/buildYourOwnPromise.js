// Custom Promise Implementation from Scratch

// Promise States
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    // Initial state
    this.state = PENDING;
    this.value = undefined; // Stores fulfilled value
    this.reason = undefined; // Stores rejection reason
    
    // Arrays to store callbacks for .then() and .catch()
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    
    // Resolve function - transitions promise to FULFILLED state
    const resolve = (value) => {
      // Can only transition from PENDING state
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;
        
        // Execute all registered onFulfilled callbacks
        this.onFulfilledCallbacks.forEach(callback => callback(value));
      }
    };
    
    // Reject function - transitions promise to REJECTED state
    const reject = (reason) => {
      // Can only transition from PENDING state
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;
        
        // Execute all registered onRejected callbacks
        this.onRejectedCallbacks.forEach(callback => callback(reason));
      }
    };
    
    // Execute the executor function immediately
    // Wrap in try-catch to handle synchronous errors
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  
  // .then() method - core of promise chaining
  then(onFulfilled, onRejected) {
    // Return a new promise for chaining
    return new MyPromise((resolve, reject) => {
      
      // Handle fulfilled state
      const handleFulfilled = (value) => {
        try {
          // If no onFulfilled handler, pass value through
          if (typeof onFulfilled !== 'function') {
            resolve(value);
            return;
          }
          
          const result = onFulfilled(value);
          
          // Handle promise resolution procedure
          this.resolvePromise(result, resolve, reject);
        } catch (error) {
          reject(error);
        }
      };
      
      // Handle rejected state
      const handleRejected = (reason) => {
        try {
          // If no onRejected handler, pass reason through
          if (typeof onRejected !== 'function') {
            reject(reason);
            return;
          }
          
          const result = onRejected(reason);
          
          // Even if we handle rejection, we resolve with the result
          this.resolvePromise(result, resolve, reject);
        } catch (error) {
          reject(error);
        }
      };
      
      // Handle different promise states
      if (this.state === FULFILLED) {
        // Promise already fulfilled - execute asynchronously
        setTimeout(() => handleFulfilled(this.value), 0);
      } else if (this.state === REJECTED) {
        // Promise already rejected - execute asynchronously
        setTimeout(() => handleRejected(this.reason), 0);
      } else {
        // Promise still pending - store callbacks
        this.onFulfilledCallbacks.push((value) => {
          setTimeout(() => handleFulfilled(value), 0);
        });
        this.onRejectedCallbacks.push((reason) => {
          setTimeout(() => handleRejected(reason), 0);
        });
      }
    });
  }
  
  // Helper method to resolve promises correctly
  resolvePromise(result, resolve, reject) {
    // If result is a promise, wait for it to settle
    if (result instanceof MyPromise) {
      result.then(resolve, reject);
    } else if (result && typeof result.then === 'function') {
      // Thenable object (promise-like)
      try {
        result.then(resolve, reject);
      } catch (error) {
        reject(error);
      }
    } else {
      // Regular value
      resolve(result);
    }
  }
  
  // .catch() method - syntactic sugar for .then(null, onRejected)
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  
  // .finally() method - executes regardless of promise outcome
  finally(onFinally) {
    return this.then(
      value => {
        if (typeof onFinally === 'function') {
          onFinally();
        }
        return value;
      },
      reason => {
        if (typeof onFinally === 'function') {
          onFinally();
        }
        throw reason;
      }
    );
  }
  
  // Static method: MyPromise.resolve()
  static resolve(value) {
    if (value instanceof MyPromise) {
      return value;
    }
    return new MyPromise((resolve) => resolve(value));
  }
  
  // Static method: MyPromise.reject()
  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason));
  }
  
  // Static method: MyPromise.all()
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        reject(new TypeError('Argument must be an array'));
        return;
      }
      
      if (promises.length === 0) {
        resolve([]);
        return;
      }
      
      const results = [];
      let completed = 0;
      
      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          value => {
            results[index] = value;
            completed++;
            
            if (completed === promises.length) {
              resolve(results);
            }
          },
          reason => reject(reason)
        );
      });
    });
  }
  
  // Static method: MyPromise.race()
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        reject(new TypeError('Argument must be an array'));
        return;
      }
      
      promises.forEach(promise => {
        MyPromise.resolve(promise).then(resolve, reject);
      });
    });
  }
  
  // Static method: MyPromise.allSettled()
  static allSettled(promises) {
    return new MyPromise((resolve) => {
      if (!Array.isArray(promises)) {
        resolve([]);
        return;
      }
      
      if (promises.length === 0) {
        resolve([]);
        return;
      }
      
      const results = [];
      let completed = 0;
      
      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          value => {
            results[index] = { status: 'fulfilled', value };
            completed++;
            
            if (completed === promises.length) {
              resolve(results);
            }
          },
          reason => {
            results[index] = { status: 'rejected', reason };
            completed++;
            
            if (completed === promises.length) {
              resolve(results);
            }
          }
        );
      });
    });
  }
}