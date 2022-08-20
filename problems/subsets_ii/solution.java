import java.util.*;

class Solution {
    public HashSet<List<Integer>> result;
    
    public Solution() {
        result = new HashSet<>();
    }
    
    public void solve(ArrayList<Integer> subset, int depth, int[] nums){
       
        if(depth == nums.length) {
          ArrayList<Integer> t = new ArrayList<>(subset);  
          Collections.sort(t);
          result.add(t);
		  return;
        }
    
        
        solve(subset, depth + 1, nums);
        subset.add(nums[depth]);
        solve(subset, depth + 1, nums);
        subset.remove(subset.size() - 1);
    }
    
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Solution s = new Solution(); 
        s.solve(new ArrayList<>(), 0, nums);
        return new ArrayList<>(s.result);
    }
}