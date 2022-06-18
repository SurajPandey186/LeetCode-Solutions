class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashMap map = new HashMap();
        
        for (int i = 0; i < nums.length; i++) {
            
            if(!map.containsKey(nums[i])) 
                map.put(nums[i], 0);
            
            int val = (int)map.get(nums[i]);
            
            map.put(nums[i], ++val);
            
            if((int)map.get(nums[i]) > 1) return true;
        }
    
        return false;
    }
}