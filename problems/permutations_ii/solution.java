class Solution {
     public List<List<Integer>> result;
	
     public void permutation(int[] nums, List<Integer> subset) {
		  if(nums.length == 0) {
			  List<Integer> cloned = new ArrayList<>(subset);
			  result.add(cloned);
			  return;
		  }
		  
		  for(int i = 0; i < nums.length; i++) {
				 int j = 0;
                 subset.add(nums[i]);
                 int[] rem = new int[nums.length - 1];
                 
                 for(int k = 0; k < nums.length; k++) {
                      if(k != i) {
                          rem[j++] = nums[k];
                      }
                 }
                
                 permutation(rem, subset);
                 subset.remove(subset.size() - 1);
		  }
	} 
    
    public List<List<Integer>> permuteUnique(int[] nums) {
        Solution s = new Solution();
        s.result = new ArrayList<>();
        s.permutation(nums, new ArrayList<>());
        HashSet<List<Integer>> set = new HashSet<List<Integer>>();
        
        int val = 0;

        while (s.result.size() > val) {
           set.add(s.result.get(val));
            val++ ;
        }
        
        return new ArrayList<>(set);
    }
}