package com.sonata;

public class GreatestNum {
	public static void main(String args[]) {
		int a[]= {12,25,89};
		int max=a[0];
		for(int i=0; i<3; i++)
		{
			if(a[i]>max)
			{
				max =a[i];
			}
		}
		System.out.println("The given array is:");
		for(int i=0;i<3;i++)
		{
			System.out.println(a[i]);
		}
		System.out.println("Greatest num is:"+max);
	}

}
