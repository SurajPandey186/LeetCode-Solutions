class Solution {
    public boolean isPalindrome(int x) {
       int reverse = 0;
       int original = Math.abs(x); 
        
       while(x > 0) {
           int remainder = x % 10;
           reverse = reverse * 10 + remainder;
           x = x / 10;
       }
        
       return reverse == original;  
    }
}