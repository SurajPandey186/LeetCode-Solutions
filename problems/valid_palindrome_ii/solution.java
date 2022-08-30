class Solution {
    
    public boolean isPallindrome(String s, int i, int j) {
     while(i < j) {
        char ch_1 = s.charAt(i);
        char ch_2 = s.charAt(j);
          
        if(ch_1 != ch_2) {
            return false;
        }
        
        i++;
        j--;  
      }
        
      return true;  
    }
    
    public boolean validPalindrome(String s) {
      boolean isPalindrome = true;
      if(s.length() == 0) return false;   
      int i = 0;
      int j =  s.length() - 1;
        
      while(i < j) {
        char ch_1 = s.charAt(i);
        char ch_2 = s.charAt(j);
          
        if(ch_1 == ch_2) {
          i++;
          j--;  
        }else {
            return isPallindrome(s, i + 1, j) || isPallindrome(s, i, j-1);
        }
      }  
        
      return isPalindrome;  
    }
}