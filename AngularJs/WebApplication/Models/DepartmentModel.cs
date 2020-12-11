using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
	public class DepartmentModel
	{
		public string Name { get; set; }
		public List<EmployeeModel> Employees { get; set; }
		public int Total
		{
			get { return this.Employees.Count; }
		}

		public int SumAge
		{
			get { return this.Employees.Sum(s => s.Age); }
		}
	}
}
