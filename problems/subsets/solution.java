

class Solution {
    void solve(int[] nums, int start, List<Integer> list, List<List<Integer>> result){
        result.add(new ArrayList<>(list));
        if(start == nums.length)
            return;
        for(int i=start; i<nums.length; i++){
            list.add(nums[i]);
            solve(nums, i+1, list, result);
            list.remove(list.size()-1);
        }
    }
    
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        solve(nums, 0, new ArrayList<>(), result);
        return result;
    }
}