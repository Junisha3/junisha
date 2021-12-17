package com.sonata.DaoImpl;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbConnection {
Connection connection ;
public Connection getConnection () {
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		 connection = DriverManager.getConnection
					("jdbc:mysql://localhost:3306/junisha","root", "NarayanajuNi32");
	}catch(ClassNotFoundException e1) {System.out.println(e1);}
	catch(SQLException e2) {e2.printStackTrace();}
	return connection;
	
}
public void classConnection() {
	try {
		if(connection != null) {
			connection.close();
		}
	}catch(SQLException sqle) {sqle.printStackTrace();}}

}

