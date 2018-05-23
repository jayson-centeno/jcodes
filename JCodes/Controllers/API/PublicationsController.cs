using JCLite.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace JCLite.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/publications")]
    public class PublicationsController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<PublicationModel> GetPublications()
        {
            return new List<PublicationModel>() {

                new PublicationModel { Id = 1, Title = "C# Useful Extension Methods", Description = "test" },
                new PublicationModel { Id = 2, Title = "Simple Coding Technique", Description = "test" },
                new PublicationModel { Id = 3, Title = "Knockout JS Component Builder", Description = "test" },
                new PublicationModel { Id = 4, Title = "Reactjs Basics", Description = "test" },
                new PublicationModel { Id = 5, Title = "ReactJS Forms and Validations", Description = "test" }

            };
        }

        [HttpPost]
        public string PostData([FromBody] UserAuthenticate user)
        {
            return string.Empty;
        }

    }
}