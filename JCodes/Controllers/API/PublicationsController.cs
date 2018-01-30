using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using JCodes.Model;

namespace JCodes.Controllers
{
    [Route("api/publications")]
    public class PublicationsController : Controller
    {
        [HttpGet("[action]")]
        [Authorize]
        public IEnumerable<PublicationModel> GetPublications()
        {
            return Enumerable.Repeat(new PublicationModel { Id =1, Title ="test", Description= "test" }, 1);
        }

        [HttpPost]
        public string PostData([FromBody] UserAuthenticate user)
        {
            return string.Empty;
        }

    }
}