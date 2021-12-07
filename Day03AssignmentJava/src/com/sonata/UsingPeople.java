package com.sonata;



public class UsingPeople {

	public static void main(String[] args) {
		
	
		TechnicalEmployee T = new TechnicalEmployee(21254, "Narasimha", "Narsapuram", 700000, 10);
		
		Staff S = new Staff(21289, "Junisha", "Pasaladeevi", 4000000, 6);
		
		T.display();
		System.out.println("Technical Employee Sal is : "+T.calculateSal());
		
		System.out.println("\n");
		S.display();
		System.out.println("Staff Sal is : "+S.calculateSal());
		
	}


}