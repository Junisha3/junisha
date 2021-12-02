package com.sonata;

public class FindingSpecValue {
	public static void main(String[] args) {
      int num[] = {3,32,323,789};
	    int toFind = 32;
	    boolean found = false;

	    for (int n : num) {
	      if (n == toFind) {
	        found = true;
	        break;
	      }
	    }
	    
	    if(found)
	      System.out.println(toFind + " is found.");
	    else
	      System.out.println(toFind + " is not found.");
	  }

}
