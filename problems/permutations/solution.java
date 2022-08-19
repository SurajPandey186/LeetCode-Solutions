class Solution {
    HashSet<List<Integer>> result;
    
    public Solution() {
        result = new  HashSet<>();
    }
	
    public void permutation(int[] nums, List<Integer> subset) {
		  if(subset.size() == nums.length) {
			  List<Integer> cloned = new ArrayList<>(subset);
			  result.add(cloned);
			  return;
		  }
		  
		  for(int i = 0; i < nums.length; i++) {
			  if(!subset.contains(nums[i])) {
				  subset.add(nums[i]);
				  permutation(nums, subset);
				  subset.remove(subset.size() - 1);
			  }
		  }
	} 
    
    public List<List<Integer>> permute(int[] nums) {
		Solution l = new Solution();
		List<Integer> subset = new ArrayList<>();
	    l.permutation(nums, subset);
        return new ArrayList<>(l.result);
    }
}