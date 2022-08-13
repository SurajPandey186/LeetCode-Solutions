class Solution {
    public int diagonalSum(int[][] mat) {
        int primarySum = 0;
        int secondarySum = 0;
        int rows = mat.length;
        int columns = mat[0].length;

        
        for(int i = 0; i < rows; i++) {
            primarySum += mat[i][i]; 
        }
        
        int k = 0;
        int l = columns - 1;
        
        while(l >= 0) {
           secondarySum += k != l ? mat[k][l] : 0;
            k++;
            l--;
        }
        
        return primarySum + secondarySum;
    }
}