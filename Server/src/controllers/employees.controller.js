const employeesController = {}

const Employee = require('../models/Employee')

employeesController.getEmployees = async (req, res) => {
  const employees = await Employee.find()
  res.json(employees)
}
employeesController.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body)
    await newEmployee.save()
    res.send({message: 'Employee created'})

}
employeesController.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id)
    //Employee.findOne({_id: req.params.id})
    res.send(employee)
}
employeesController.editEmployee = async (req, res) => {
    await Employee.findOneAndUpdate(req.params.id, req.body)
    res.json({status: 'Employee updated'})
}
employeesController.deleteEmployee = async (req, res) => {
    console.log(req.params.id)
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'Employee Deleted'})
}

module.exports = employeesController;