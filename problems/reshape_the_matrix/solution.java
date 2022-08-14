class Solution {
    public int[][] matrixReshape(int[][] mat, int r, int c) {
        int rows = mat.length;
        int cols = mat[0].length;
        
        if((r * c) != (rows * cols)) return mat;
        
        
        int l = 0;
        int k = 0;
       
        int[][] result = new int[r][c];
        
        for(int i = 0; i < rows; i++) {
           for(int j = 0; j < cols; j++) {
              result[l][k] = mat[i][j];
              k++;
              if(k == c) {
                  l += 1;
                  k -= k;
              } 
           };
        }
        
        return result;
    }
}