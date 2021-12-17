package com.sonata;
	import java.sql.*;
	class JdbcEx
	{
	public static void main(String args[])
	{
	String driver = "com.mysql.jdbc.Driver";
	String url = "jdbc:mysql://localhost:3306/school";
	String username = "root";
	String password  = "NarayanajuNi32";
	try
	{
	Class.forName(driver);
	Connection con= DriverManager.getConnection(url,username,password);
	Statement stmt = con.createStatement();
	stmt.executeUpdate("insert into student values(1,'Naram')");
	con.close();
	}
	catch(Exception e) {
		System.out.println(e);
	}
	}
	}


