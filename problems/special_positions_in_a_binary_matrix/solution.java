class Solution {
    public boolean isSpecial(int m, int n, int[][] mat){
        int rows = mat.length;
        int cols = mat[0].length;
        int rowOneCount = 0;
        int colOneCount = 0;
        
        for(int i = 0; i < cols; i++) {
            if(mat[m][i] == 1) {
                rowOneCount++;
            }
        }
        
        for(int i = 0; i < rows; i++) {
            if(mat[i][n] == 1) {
                colOneCount++;
            }
        }
        
        return rowOneCount == 1 && colOneCount == 1;
    }
    
    public int numSpecial(int[][] mat) {
        int result = 0;
        int rows = mat.length;
        int cols = mat[0].length;
        
        for(int i = 0; i < rows; i++) {
           for(int j = 0; j < cols; j++) {
              if(mat[i][j] == 1 && this.isSpecial(i, j, mat)) {
                  result += 1;
              }
           }
        }
        
        return result;
    }
}