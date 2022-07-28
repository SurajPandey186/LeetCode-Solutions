class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        int count = 0;
        HashMap<Character, Integer> _map = new HashMap<>();
        
        for(int i = 0; i < jewels.length(); i++) {
            char ch = jewels.charAt(i);
            if(!_map.containsKey(ch)) {
                _map.put(ch, 0);
            }
            
            int value = _map.get(ch);
            _map.put(ch, value + 1);
        }
        
        for(int j = 0; j < stones.length(); j++) {
            char ch = stones.charAt(j);
            
            if(_map.containsKey(ch)) {
               count = count + 1;   
            }
        }
        
        return count;
    }
}