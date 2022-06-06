class Solution {
    public boolean rotateString(String s, String goal) {
        int noOfRoatations = 1;
        char str[] = s.toCharArray();;
        
        while(noOfRoatations <= str.length) {
            
            int i = 1;
            String  s2 = "";
            char st = str[0];
            
            while(i <= s.length() - 1) {
                str[i-1] = str[i];
                s2 += str[i-1];
                i++;
            }
            
            str[str.length - 1] = st;
            s2 += st;
            
           
            if(s2.equals(goal)) return true;
            
            ++noOfRoatations;
        }
        
        return false;
    }
}