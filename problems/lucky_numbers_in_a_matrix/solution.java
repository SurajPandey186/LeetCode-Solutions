class Solution {
    
    public boolean isLucky(int m, int n, int rows, int cols, int[][] matrix) {
        int min = matrix[m][n];
        int max = matrix[m][n];
        
        for(int i = 0; i < cols; i++) {
            if(min > matrix[m][i]) {
                min = matrix[m][i];
            };
        };
        
        for(int i = 0; i < rows; i++) {
            if(max < matrix[i][n]) {
                max = matrix[i][n];
            };
        };
        
        return min == max;
    }
    
    public List<Integer> luckyNumbers (int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        List<Integer> l = new ArrayList<>();
        
        for(int i = 0; i < rows; i++) {
           for(int j = 0; j < cols; j++) {
              if(this.isLucky(i, j, rows, cols, matrix)) {
                  l.add(matrix[i][j]);
              }
           }
        }
        
        return l;
        
    }
}