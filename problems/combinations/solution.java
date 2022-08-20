class Solution {
    List<List<Integer>> op;
    
    public Solution() {
        op = new ArrayList<>();
    }
    
    public void getCombinations(List<Integer> t, int k, int index, int[] nums) {
   
        if(k == t.size()) {
            this.op.add(new ArrayList<Integer>(t));
            return;
        }
        
        for(int i = index; i < nums.length; i++) {
            t.add(nums[i]);
            getCombinations(t, k, i + 1, nums);
            t.remove(t.size() -1);
        }
    }
    
    public List<List<Integer>> combine(int n, int k) {
        int[] nums = new int[n];
        Solution S = new Solution();
        ArrayList<Integer> t = new ArrayList<>();

        for(int i = 1; i <= n; i++) {
            nums[i-1] = i;
        }
        
        S.getCombinations(t, k, 0, nums);
        return S.op;
        
    }
}