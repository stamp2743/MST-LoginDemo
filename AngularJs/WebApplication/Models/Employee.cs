using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace WebApplication.Models
{
    public partial class Employee
    {
        [Required]
        public string En { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int Departmentid { get; set; }
        public int? Age { get; set; }
        public double? Salary { get; set; }
        public string Alive { get; set; }

        public virtual Department Departments { get; set; }
    }
}
