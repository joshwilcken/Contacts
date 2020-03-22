using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {

        private readonly ContactsService _contactsService;
        public ContactsController(ContactsService contactsService)
        {
            _contactsService = contactsService;
        }

        [HttpGet]
        public IActionResult Contacts()
        {
            return Ok(_contactsService.GetContacts());
        }

        [HttpPut]
        public void EditContact()
        {

        }

        [HttpPost]
        public void AddContact()
        {

        }

        [HttpDelete]
        public void DeleteContact()
        {

        }
    }
}
