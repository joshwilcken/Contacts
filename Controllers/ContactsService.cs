using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contacts.Models;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    public class ContactsService
    {
        private readonly DataContext _context;
        public ContactsService(DataContext context)
        {
            _context = context;
        }

        public List<Contact> GetContacts()
        {
            return _context.Contact.ToList();
        }

        public bool SaveContact(Contact contact)
        {
            _context.Contact.Add(contact);
            return _context.SaveChanges() >= 0;
        }

        public bool DeleteContact(int id)
        {
            Contact contact = _context.Contact.Where(x => x.Id == id).FirstOrDefault();

            if (contact != null)
            {
                _context.Contact.Remove(contact);
            }
            return _context.SaveChanges() >= 0;
        }

        public bool EditContact(Contact contact)
        {
            Contact existing = _context.Contact.Where(c => c.Id == contact.Id).FirstOrDefault();

            if (existing != null)
            {
                existing.FirstName = contact.FirstName;
                existing.LastName = contact.LastName;
                existing.Street = contact.Street;
                existing.City = contact.City;
                existing.State = contact.State;
                existing.Email = contact.Email;
                existing.Zip = contact.Zip;
                existing.PhoneNumber = contact.PhoneNumber;

                return _context.SaveChanges() >= 0;
            }
            return false;

        }

    }
}
