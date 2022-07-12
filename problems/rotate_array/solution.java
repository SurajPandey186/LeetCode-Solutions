class Solution {

  public void reverse(int start, int end, int[] array) {
    while (start <= end) {
      int temp = array[start];
      array[start] = array[end];
      array[end] = temp;
      start++;
      end--;
    }
  }

  public void rotate(int[] nums, int k) {
    if (k == 0 || k == nums.length || k < 0) return;

    int noOfRotations = k > nums.length ? k % nums.length : k;
    reverse(0, nums.length - 1, nums);
    reverse(0, noOfRotations - 1, nums);
    reverse(noOfRotations, nums.length - 1, nums);
  }
}


