package com.sonata;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class FirstJdbcExample {
	
	public static void main(String args[]){
	try
	{
	Class.forName("com.mysql.cj.jdbc.Driver");
	Connection con= DriverManager.getConnection("jdbc:mysql://localhost:3306/junisha","root", "NarayanajuNi32");
	Statement stmt = con.createStatement();
	ResultSet rs = stmt.executeQuery("select * from employee");
	while(rs.next()) {
		System.out.println(rs.getInt(1));
		System.out.println(rs.getString(2));
	}
	}
	catch(Exception e) {
		System.out.println(e);
	}
	
	}
}
