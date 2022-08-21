class Solution {
    static String[] reverse(String a[])
    {
        Collections.reverse(Arrays.asList(a));
        return a;
    }
    
    public String addStrings(String num1, String num2) {
        int i = 0;
        int carry = 0;
        String result = "";
        String[] s1 = Solution.reverse(num1.split(""));
        String[] s2 = Solution.reverse(num2.split(""));
        
        while(i < s1.length || i < s2.length) {
            int c1 = Integer.parseInt(i >= s1.length ? "0": s1[i]);
            int c2 = Integer.parseInt(i >= s2.length ? "0": s2[i]);
            
            int sum = c1 + c2 + carry;
            carry = sum > 9 ? 1 : 0;
            System.out.println(sum);
            result += sum % 10;
            i++;
        };
        
        if(carry == 1) {
            result += "1";
        }
        
        StringBuilder sb =new StringBuilder(result);  
        sb.reverse();  
        return sb.toString();
    }
}