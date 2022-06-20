class Solution {
    public int[] plusOne(int[] digits) {
        int carry = 0;
        int baseSum = digits[digits.length - 1] + carry + 1;
        
        if(baseSum > 9){ 
            carry = 1;
            
             for(int i = digits.length - 1; i >= 0; i--) {
                 int tempSum = digits[i] + carry;
                 
                 carry = tempSum > 9 ? 1: 0;
                 
                 digits[i] = tempSum % 10;
             }
            
             if(carry == 1) {
                 int[] newArr = new int[digits.length+1];
                 newArr[0] = 1;
                 
                 int count = 1;
                 
                 for(int value: digits) {
                     newArr[count++] = value;
                 }
                 return newArr;
             }
            return digits;
            
        }
        
        
        digits[digits.length - 1] = baseSum;
        
        return digits;
    }
}