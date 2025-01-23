// employeeService.js
const fs = require('fs');

class EmployeeService {
    constructor() {
        this.filePath = "employees.json";
    }

    // Helper function to read employees from JSON file
    readEmployees() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            console.error('Error reading employees:', err);
            return [];
        }
    }

    // Get all employees
    getAllEmployees() {
        return this.readEmployees();
    }

    // Get a employee by ID
    getEmployeeByID(id) {
        const employees = this.readEmployees();
        return employees.find(employee => employee.id === id);
    }
}

module.exports = EmployeeService;
