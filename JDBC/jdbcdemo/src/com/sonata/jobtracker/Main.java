package com.sonata.jobtracker;

import java.sql.SQLException;
import java.util.List;


import com.sonata.jobtracker.dao.impl.JobTrackerDaoImpl;
import com.sonata.jobtracker.model.Task;

public class Main {

	public static void main(String[] args) throws SQLException

	{
		try {
       Task t1=new Task();
		
		t1.setTaskId(2);
		t1.setOwnerId(2);
		t1.setCreatorId(33);
		t1.setName("naram");
		t1.setDescription("JDBC");
		t1.setStatus("completed");
		t1.setPriority("high");
		t1.setNotes("Available");
		t1.setIsBookmarked(67);
	
			
	 //t1.setOwnerId(29000);
		
		JobTrackerDaoImpl dao=new JobTrackerDaoImpl();
		//int row=dao.save(Task);
		//System.out.println(row);
		List<Task>list=dao.getData();
		for(Task t:list)
		{
			System.out.println(t.getTaskId());
			System.out.println(t.getOwnerId());
			System.out.println(t.getCreatorId());
			System.out.println(t.getName());
			System.out.println(t.getDescription());
			System.out.println(t.getStatus());
			System.out.println(t.getPriority());
			System.out.println(t.getNotes());
			System.out.println(t.getIsBookmarked());
		
		}
		}catch(Exception e) {
			System.out.println("e"); {
			}
		}

	}

}