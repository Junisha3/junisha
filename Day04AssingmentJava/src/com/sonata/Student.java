package com.sonata;
import java.util.ArrayList;
import java.util.List;
import java.util.Comparator;

class Student {
   String name;  
   int marks; 
   public String getName() {
      return name; 
   } 
  
   public int getMarks() { 
      return marks; 
   } 
   Student(String n,  int m){ 
      name = n; 
           marks = m; 
   } 
   @Override public String toString() {     
      return ("Student[ "+"Name:"+this.getName()+                     
              " Marks: "+ this.getMarks()+"]"); 
   }

   public static void main(String[] args) {
      List<Student> studentlist = new ArrayList<Student>();
      studentlist.add(new Student("Junisha", 95)); 
      studentlist.add(new Student("Anitha", 63)); 
      studentlist.add(new Student("Bhavani", 85)); 
      studentlist.add(new Student("Divya", 10)); 
      studentlist.add(new Student("Chinnari", 70));
      studentlist.sort((Student s1, Student s2)->s2.getMarks()-s1.getMarks());
      studentlist.forEach((s)->System.out.println(s)); 
   }
   }
   