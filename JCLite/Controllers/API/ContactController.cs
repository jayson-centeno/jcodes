using JCLite.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JCLite.Controllers.API
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/contact")]
    public class ContactController : Controller
    {
        public bool Post([FromBody]ContactModel contact)
        {



            return true;
        }
    }
}