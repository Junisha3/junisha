package com.sonata;

public class RectangleArea  extends Shape 
{
	
	public double rectangle(double length, double width) 
	{
		return length * width;
	}

	public static void main(String[] args)
	{
		
		RectangleArea  ar = new RectangleArea ();
		System.out.println("Area of Rectangle is : "+ar.rectangle(2.5, 1.5));
		
	}

}