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

        [HttpPost]
        public IActionResult AddContact([FromBody] Contact contact)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(_contactsService.SaveContact(contact));
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteContact(int id)
        {
            return Ok(_contactsService.DeleteContact(id));
        }

        [HttpPut]
        public IActionResult EditContact([FromBody] Contact contact)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(_contactsService.EditContact(contact));
        }

    }
}
