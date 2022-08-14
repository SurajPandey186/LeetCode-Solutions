class Solution {
    public boolean isPowerOfThree(int n) {
        if(n == 1) return true;
        if(n <= 0) return false;
        
        while(true) {
            int q = n / 3;
            int r = n % 3;
            
            if(q == 1 && r == 0) {
                return true;
            }
            
            if(q != 1 && r < 3 && r > 0) {
                return false;
            }
            
            n = q;
        }
    }
}