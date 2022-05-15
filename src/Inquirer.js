// package inquirer to handle prompts
const inquirer = require('inquirer');

// utility function to create good-looking console logs
const { primary, secondary } = require('./utils/chalkRender');

// helper functions to call inquirer on library questions
class Inquirer {
	// constructor() {}

	menu = async () =>
		await inquirer.prompt([
			{
				name: 'menu',
				type: 'list',
				prefix: ' ' + primary('Menu'.padEnd(120)) + '\n',
				message: secondary('What would you like to do?'.padEnd(120)) + '\n > ',
				choices: ['View All Departments', 'View All Roles', 'View All Employees', 'View Employees by Department', 'View Employees by Manager', 'View Total Utilized Budget by Department', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'Update Employee Manager', 'Delete Department', 'Delete Role', 'Delete Employee', 'Quit'],
				pageSize: 5,
			},
		]);

	viewEmployeesByDepartment = (departmentNames) =>
		inquirer.prompt([
			{
				name: 'department_name',
				type: 'list',
				message: primary('View employees') + secondary("Which department's employees do you want to view?"),
				choices: departmentNames,
			},
		]);

	viewEmployeesByManager = (managerNames) =>
		inquirer.prompt([
			{
				name: 'manager_name',
				type: 'list',
				message: primary('View employees') + secondary("Which manager's employees do you want to view?"),
				choices: managerNames,
			},
		]);

	viewTotalUtilizedBudgetByDepartment = async (departmentNames) =>
		inquirer.prompt([
			{
				name: 'department_name',
				type: 'list',
				message: primary('View budget') + secondary("Which department's total utilized budget do you want to view?"),
				choices: departmentNames,
			},
		]);

	addDepartment = () =>
		inquirer.prompt([
			{
				name: 'name',
				type: 'input',
				message: primary('Add department') + secondary(`What is the name of the department?`),
			},
		]);

	addRole = (departmentNames) =>
		inquirer.prompt([
			{
				name: 'title',
				type: 'input',
				message: primary('Add role') + secondary(`What is the name of the role?`),
			},
			{
				name: 'salary',
				type: 'input',
				message: primary('Add role') + secondary(`What is the salary of the role?`),
			},
			{
				name: 'department_name',
				type: 'list',
				message: primary('Add role') + secondary('Which department does the role belong to?'),
				choices: departmentNames,
			},
		]);

	addEmployee = (roleNames, managerNames) =>
		inquirer.prompt([
			{
				name: 'first_name',
				type: 'input',
				message: primary('Add employee') + secondary(`What is the employee's first name?`),
			},
			{
				name: 'last_name',
				type: 'input',
				message: primary('Add employee') + secondary(`What is the employee's last name?`),
			},
			{
				name: 'role_name',
				type: 'list',
				message: primary('Add employee') + secondary("What is the employee's role?"),
				choices: roleNames,
			},
			{
				name: 'manager_name',
				type: 'list',
				message: primary('Add employee') + secondary("Who is the employee's manager?"),
				choices: managerNames[0] === 'undefined undefined' ? [...managerNames, 'none'] : ['none'],
			},
		]);

	updateEmployeeRole = (employeeNames, roleNames) =>
		inquirer.prompt([
			{
				name: 'employee_name',
				type: 'list',
				message: primary('Update employee') + secondary("Which employee's role do you want to update?"),
				choices: employeeNames,
			},
			{
				name: 'role_name',
				type: 'list',
				message: primary('Update employee') + secondary('Which role do you want to assign the selected employee?'),
				choices: roleNames,
			},
		]);

	updateEmployeeManager = (employeeNames, managerNames) =>
		inquirer.prompt([
			{
				name: 'employee_name',
				type: 'list',
				message: primary('Update employee') + secondary("Which employee's manager do you want to update?"),
				choices: employeeNames,
			},
			{
				name: 'manager_name',
				type: 'list',
				message: primary('Update employee') + secondary('Which manager do you want to assign the selected employee?'),
				choices: [...managerNames, 'none'],
			},
		]);

	deleteDepartment = (departmentNames) =>
		inquirer.prompt([
			{
				name: 'department_name',
				type: 'list',
				message: primary('Delete department') + secondary('Which department do you want to delete?'),
				choices: departmentNames,
			},
		]);

	deleteRole = (roleNames) =>
		inquirer.prompt([
			{
				name: 'role_name',
				type: 'list',
				message: primary('Delete role') + secondary('Which role do you want to delete?'),
				choices: roleNames,
			},
		]);

	deleteEmployee = (employeeNames) =>
		inquirer.prompt([
			{
				name: 'employee_name',
				type: 'list',
				message: primary('Delete employee') + secondary('Which employee do you want to delete?'),
				choices: employeeNames,
			},
		]);
}

module.exports = Inquirer;