class Solution {
    public int[][] flipAndInvertImage(int[][] image) {
        for(int i = 0; i < image.length; i++) {
            int j = 0;
            int k = image.length - 1;
            
            while(j <=k) {
                int temp = image[i][j];
                image[i][j] = image[i][k];
                image[i][k] = temp;
                
                if(k != j) {
                  image[i][j] = image[i][j] == 1 ? 0 : 1;
                  image[i][k] = image[i][k]== 1 ? 0 : 1;
                }else {
                    image[i][j] = image[i][j] == 1 ? 0 : 1;
                }

                j++;
                k--;
            }
        }
        
        return image;
    }
}