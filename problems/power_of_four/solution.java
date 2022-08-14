class Solution {
    public boolean isPowerOfFour(int n) {
        if(n == 1) return true;
        if(n <= 0) return false;
        
        while(true) {
            int q = n / 4;
            int r = n % 4;
            
            if(q == 1 && r == 0) {
                return true;
            }
            
            if(q != 1 && r > 0 && r < 4) {
                return false;
            }
            
            n = q;
        }
    }
}