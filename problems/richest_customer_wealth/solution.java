class Solution {
    public int maximumWealth(int[][] accounts) {
        int max = 0;
        
        for(int customer[]: accounts) {
            int sum = 0;
            for(int val: customer) {
                sum+= val;
            }
            
            if(max < sum) {
                max = sum;
            }
        }
        
        return max;
    }
}