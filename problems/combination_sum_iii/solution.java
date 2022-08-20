class Solution {
    public List<List<Integer>> combinationSum3(int k, int n) {
      
      List<List<Integer>> result = new ArrayList<>();
      List<Integer> current = new ArrayList<>();
      
      cal(k, n, 0, current, result, 1); 
      
      return result; 
      
    }
  
    public void cal(int k, int n, int sum, List<Integer> current, List<List<Integer>> result, int value) {

      if (sum == n && current.size() == k) {
        result.add(new ArrayList<>(current));
        return;
      }
      
      if (sum > n || current.size() == k) {
        return;
      }
      
      for (int a = value; a < 10; a++) {
        sum += a;
        current.add(a);
        cal(k, n, sum, current, result, a + 1);
        current.remove(current.size() - 1);
        sum -= a;
      }
    }
}