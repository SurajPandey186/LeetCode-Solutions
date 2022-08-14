class Solution {
    
    public double sol(double x, int n) {
        if(n == 1) {
            return x;
        }
        
        if(n == 0) {
            return 1;
        }
        
        double val = this.sol(x, n / 2);
        
        return n % 2 == 0 ? val * val : val * val * x; 
    }
    
    public double myPow(double x, int n) {
        
        if(n == 0) return 1;
        
        if(n < 0 ) {x = 1 / x;}
        
        return this.sol(x, Math.abs(n));
    }
}