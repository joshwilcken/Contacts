using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contacts.Models;

namespace WebApplication1.Controllers
{
    public class ContactsService
    {
        private readonly MyContext _context;
        public ContactsService(MyContext context)
        {
            _context = context;
        }

        public List<Contact> GetContacts()
        {
            return _context.Contact.ToList();
        }
    }
}
