package com.sonata.TestSuitExample;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class testClass2 {
	
	String message = "Junisha";	
	   MessageClass messageUtil = new MessageClass(message);
	 
	   @Test
	   public void testSalutationMessage() {
	      System.out.println("Inside testSalutationMessage()");
	      message =  "Hi!" + "Junisha";
	      assertEquals(message,messageUtil.salutationMessage());
	   }

}
