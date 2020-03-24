
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Controllers;

namespace Contacts.Models
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options)
            :base(options) { }

        public DbSet<Contact> Contact { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source =(localdb)\\mssqllocaldb;Database=Contact;Trusted_Connection=True");
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().HasData(
                new Contact
                {
                    Id = 1,
                    FirstName = "Steve",
                    LastName = "Rogers",
                    Street = "123 Brooklyn St.",
                    City = "Brooklyn",
                    State = "NY",
                    Email = "steveR@Avengers.com",
                    Zip = 11234,
                    PhoneNumber = "1115551234"
                }
                );
        }
    }
}
