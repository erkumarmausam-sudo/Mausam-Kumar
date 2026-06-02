package com.example.employeeapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.employeeapi.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}