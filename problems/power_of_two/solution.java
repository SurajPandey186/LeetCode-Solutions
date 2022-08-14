class Solution {
    public boolean isPowerOfTwo(int n) {
         
 
        if(n == 1) return true;
        if(n <= 0) return false;
        
        while(true) {
            int q = n / 2;
            int r = n % 2;
            
            if(q == 1 && r == 0) {
                return true;
            }
            
            if(r == 1) {
                return false;
            }
            
            n = q;
        }
    }
}