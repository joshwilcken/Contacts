using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contacts.Models;
using Microsoft.EntityFrameworkCore;
using Moq;
using WebApplication1.Controllers;
using Xunit;

namespace Contacts.Tests
{
    public class ServiceControllerTests
    {
        [Fact]
        public void Get_Should_Return_Contact()
        {
            Contact contact = new Contact()
            {
                FirstName = "Steve",
                LastName = "Rogers",
                PhoneNumber = "1115551234",
                Email = "steve.Rogers@avegers.com",
                Street = "123 Brooklyn St.",
                City = "Brooklyn",
                State = "NY",
                Zip = 11234,
            };
            List<Contact> contacts = new List<Contact>();
            contacts.Add(contact);

            var mockDbSet = new Mock<DbSet<Contact>>(contacts);
            var dbContext = new Mock<DataContext>();
            dbContext.Setup(m => m.Contact).Returns(mockDbSet.Object);
            var contactService = new ContactsService(dbContext.Object);

            var result = contactService.GetContacts();

            Assert.Equal(result, mockDbSet.Object);
        }
    }
}
