using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using WebApplication.Models;
using Microsoft.AspNetCore.Http;
namespace WebApplication.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private readonly AngularContext _context;

        public HomeController(ILogger<HomeController> logger, AngularContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult NewTrouble()
        {

            return View();
        }
        public IActionResult ViewTrouble()
        {

            return View();
        }

        public IActionResult Add()
        {

            return View();
        }

        public IActionResult Test()
        {

            return View();
        }

        public IActionResult LoginUser(User user)
        {
            TokenProvider _tokenProvider = new TokenProvider();
            var userToken = _tokenProvider.LoginUser(user.USERID.Trim(), user.PASSWORD.Trim());
            if (userToken != null)
            {
                //Save token in session object
                HttpContext.Session.SetString("JWToken", userToken);
            }
            return Redirect("~/Home/Test");

        }
        public IActionResult Logoff()
        {
            HttpContext.Session.Clear();
            return Redirect("~/Home/Index");

        }

        public IActionResult Index()
        {
           return View("Login");
        }

        [HttpGet]
        public JsonResult GetEmployee()
        {

            var empData = _context.Employees.Include(l => l.Departments).ToList();

            return Json(empData);
        }

        [HttpGet]
        public JsonResult GetDepartment()
        {

            var deptData = _context.Departments.ToList();

            return Json(deptData);
        }

        [HttpPost]
        public JsonResult InsertEmployee([FromBody] Employee data)
        {
            var empData = new Employee()
            {
                En = data.En,
                Name = data.Name,
                Age = data.Age,
                Salary = data.Salary,
                Departmentid = data.Departmentid,
                Alive = "Y"
            };

            _context.Add(empData);
            _context.SaveChanges();

            return Json(empData);
        }

        [HttpPost]
        public JsonResult UpdateEmployee([FromBody] List<Employee> data)
        {
            foreach (var row in data)
            {
                var oldData = _context.Employees.FirstOrDefault(w => w.En == row.En);
                if (oldData.Alive != row.Alive || oldData.Departmentid != row.Departmentid || oldData.Age != row.Age || 
                    oldData.Name != row.Name || oldData.Salary != row.Salary)
                {

                    oldData.Alive = row.Alive;
                    oldData.Name = row.Name;
                    oldData.Salary = row.Salary;
                    oldData.Departmentid = row.Departmentid;
                    oldData.Age = row.Age;

                    _context.Update(oldData);
                    _context.SaveChanges();
                }
            }
            return Json("Success");
        }

        [HttpPost]
        public JsonResult DeleteEmployee([FromBody] Employee data)
        {
            _context.Remove(data);
            _context.SaveChanges();
            return Json("Success");
        }

        public IActionResult Privacy()
        {
            var deparment = new DepartmentModel()
            {
                Name = "IT",
                Employees = new List<EmployeeModel>()
            };



            var employee = new EmployeeModel()
            {
                En = "025614",
                Name = "Wansao 1",
                Department = "IT",
                Age = 37
            };
            deparment.Employees.Add(employee);



            employee = new EmployeeModel();
            employee.En = "025614";
            employee.Name = "Wansao 2";
            employee.Department = "IT";
            employee.Age = 37;
            deparment.Employees.Add(employee);



            deparment.Employees.Add(new EmployeeModel()
            {
                En = "025614",
                Name = "Wansao 3",
                Department = "IT",
                Age = 37
            });



            deparment.Employees.Add(new EmployeeModel()
            {
                En = "025614",
                Name = "Wansao 4",
                Department = "IT",
                Age = 37
            });
            deparment.Employees.Add(new EmployeeModel()
            {
                En = "025614",
                Name = "Wansao 5",
                Department = "IT",
                Age = 37
            });
            return View(deparment);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
