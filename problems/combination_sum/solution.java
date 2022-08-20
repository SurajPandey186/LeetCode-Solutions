class Solution {
        
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        _rescusion(candidates, new ArrayList<>(), target, 0, result);
        return result;
    }
    
    public void _rescusion(int[] n, List<Integer> t, int s, int i, List<List<Integer>> r) {
       if(s == 0) {
          r.add(new ArrayList<>(t));
          return;
       }
    
       for(int k = i; k < n.length; k++) {
         if(n[k] <= s) {
              t.add(n[k]);
              _rescusion(n, t, s - n[k], k, r);
              t.remove(t.size() - 1);
          }
       }
    }
}