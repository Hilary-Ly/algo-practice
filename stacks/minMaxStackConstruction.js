class MinMaxStack {
   constructor() {
      this.stack = [];
      this.minMaxStack = [];
   }

   peek() {
      return this.stack[this.stack.length - 1];
   }

   pop() {
      this.minMaxStack.pop();
      return this.stack.pop();
   }

   push(number) {
      const minMax = { min: number, max: number };
      if (this.minMaxStack.length) {
         const prevMinMax = this.minMaxStack[this.minMaxStack.length - 1];
         minMax.min = Math.min(prevMinMax.min, number);
         minMax.max = Math.max(prevMinMax.max, number);
      }
      this.minMaxStack.push(minMax);
      this.stack.push(number);
   }

   getMin() {
      return this.minMaxStack[this.minMaxStack.length - 1].min;
   }

   getMax() {
      return this.minMaxStack[this.minMaxStack.length - 1].max;
   }
}
