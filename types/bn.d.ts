declare module 'bn.js' {
  class BN {
    constructor(number: number | string | number[] | Uint8Array | Buffer | BN, base?: number | 'hex', endian?: string);
    
    // Basic operations
    toString(base?: number | 'hex', length?: number): string;
    toNumber(): number;
    toJSON(): string;
    toArray(endian?: string, length?: number): number[];
    toBuffer(endian?: string, length?: number): Buffer;
    
    // Arithmetic operations
    add(b: BN): BN;
    sub(b: BN): BN;
    mul(b: BN): BN;
    div(b: BN): BN;
    mod(b: BN): BN;
    pow(b: BN): BN;
    
    // Comparison operations
    eq(b: BN): boolean;
    lt(b: BN): boolean;
    lte(b: BN): boolean;
    gt(b: BN): boolean;
    gte(b: BN): boolean;
    
    // Bitwise operations
    and(b: BN): BN;
    or(b: BN): BN;
    xor(b: BN): BN;
    shln(b: number): BN;
    shrn(b: number): BN;
    
    // Other methods
    neg(): BN;
    abs(): BN;
    ineg(): BN;
    iuor(b: BN): BN;
    ishrn(b: number): BN;
    
    // Useful properties
    words: number[];
    length: number;
    negative: number;
    red: any;
    
    // Static methods
    static min(a: BN, b: BN): BN;
    static max(a: BN, b: BN): BN;
    
    // Additional methods
    bitLength(): number;
    zeroBits(): number;
    byteLength(): number;
    isNeg(): boolean;
    isEven(): boolean;
    isOdd(): boolean;
    isZero(): boolean;
    cmp(b: BN): number;
    ucmp(b: BN): number;
    sqr(): BN;
    divRound(b: BN): BN;
    iand(b: BN): BN;
    ior(b: BN): BN;
    ixor(b: BN): BN;
    inot(): BN;
    ishln(bits: number): BN;
    imaskn(bits: number): BN;
    testn(bit: number): boolean;
    clone(): BN;
  }
  
  export default BN;
} 