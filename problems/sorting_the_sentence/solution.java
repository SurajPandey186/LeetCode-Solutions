class Solution {
    public String sortSentence(String s) {
        String temp = "";
        String[] words = new String[10];
        
        for(int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            int code = ch;
            
            if(code == 32) continue;
            
            if(code >= 49 && code <= 57) {
                words[code - 49] = temp;
                temp = "";
                continue;
            }
            
            temp += ch;
        }
        
       
        
        temp = "";
            
        for(int i = 0; words[i] != null; i++) {
            
            temp += (words[i+1] == null) ? words[i] : words[i] + " ";
        }
        
        return temp;
        
    }
}