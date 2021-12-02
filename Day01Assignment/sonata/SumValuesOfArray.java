package com.sonata;

public class SumValuesOfArray {
	public static void main(String[] args) {      
		int values[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
		int sum = 0;
         for (int i : values)
		    sum += i;
		System.out.println("The sum is " + sum);
		}
	
}

