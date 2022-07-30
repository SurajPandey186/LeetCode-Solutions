class Solution {
    
    public boolean isVowel(char c) {        
        if(Character.compare(c, 'a') == 0 || Character.compare(c, 'A') == 0) {
            return true;
        }
        
        if(Character.compare(c, 'e') == 0 || Character.compare(c, 'E') == 0) {
            return true;
        }
        
        if(Character.compare(c, 'i') == 0 || Character.compare(c, 'I') == 0) {
            return true;
        }
        
        if(Character.compare(c, 'o') == 0 || Character.compare(c, 'O') == 0) {
            return true;
        }
        
        if(Character.compare(c, 'u') == 0 || Character.compare(c, 'U') == 0) {
            return true;
        }
        
        return false;
    }
    
    public boolean halvesAreAlike(String s) {
        
        
        int i = 0;
        int l_count = 0;
        int r_count = 0;
        int j = s.length() - 1;
        
        while(i < j) {
           char t = s.charAt(i);
           char y = s.charAt(j);
            
           if(isVowel(t)) {
               l_count++;
           }
            
           if(isVowel(y)) {
               r_count++;
           }  
            
           i++;
           j--; 
        }
        
        return l_count == r_count;
    }
}