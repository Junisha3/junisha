package com.sonata;

import java.util.ArrayList;

public class UserEmployee {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		EmployeeImpl emp=new EmployeeImpl();
		
		//Adding new employee
		Employee e=new Employee();
		e.setEmpId(21288);
		e.setEmpName("Anitha");
		e.setEmpSalary(450000);
		emp.addEmployee(e);
		
		//Adding new employee
		Employee e1=new Employee();
		e1.setEmpId(21289);
		e1.setEmpName("Junisha");
		e1.setEmpSalary(700000);
		emp.addEmployee(e1);
		
		
		emp.displayEmployees();
		
		//Removing employee
		emp.deleteEmployee(e);
		
		System.out.println("21288 employee is removed");
		emp.displayEmployees();
		
		//Employee year salary
		System.out.println(e1.getEmpName()+" year salary is: "+emp.yearSalary(e1));
	}

}