using JCodes.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JCodes.Controllers.API
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