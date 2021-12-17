package com.sonata.jobtracker.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import com.sonata.jobtracker.model.Task;

public class JobTrackerDaoImpl implements com.sonata.jobtracker.dao.JobTrackerDao {
	public boolean addTask(Task task) throws SQLException{
		boolean added = false;
		Connection conn = new MyConnectionImpl().connectToMySQL();
		String sql = "INSERT INTO Task (taskId,ownerid,name) VALUES(?,?,?)";
		PreparedStatement pst = conn.prepareStatement(sql);
		pst.setInt(1, task.getTaskId());
		pst.setInt(2, task.getOwnerId());
		pst.setString(3, task.getName());
		int r = pst.executeUpdate(); // insert, delete, update
		pst.close();
		conn.close();
		if (r > 0)
		added = true;
		return added;
		}

	@Override
	public List<Task> getAllTasks() throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Task> getAllTasksByStatus(String status) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Task> getAllTasksByOwner(String status) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateTaskStatus(int taskid, String status) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateTaskPriority(int taskid, String priority) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateTaskNotes(int taskid, String Notes) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int assignTaskUser(int taskid, int ownerid) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean addTask1(Task task) throws SQLException {
		// TODO Auto-generated method stub
		return false;
	}

	public List<Task> getData() {
		// TODO Auto-generated method stub
		return null;
	}
}
