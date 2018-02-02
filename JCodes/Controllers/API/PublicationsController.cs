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