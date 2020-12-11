using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public static class TestConnectData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new AngularContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<AngularContext>>()))
            {
                // Look for any movies.
                if (context.Employees.Any())
                {
                    return;   // DB has been seeded
                }

                context.Employees.AddRange(
                    new Employee
                    {
                        En = "111111",
                        Departmentid = 1,
                        Age = 33,
                        Name = "Mr. One",
                        Salary = 1000

                    },

                    new Employee
                    {
                        En = "222222",
                        Departmentid = 1,
                        Age = 12,
                        Name = "Mr. Two",
                        Salary = 2000
                    }

                );
                context.SaveChanges();
            }
        }
    }
}
