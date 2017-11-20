using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Configuration;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authorization;

namespace JCodes
{
    [Route("api/[controller]")]
    public class TokenController : Controller
    {
        public TokenController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }    

        [HttpPost("")]
        [AllowAnonymous]
        //[AllowCrossSiteJson]
        public IActionResult Post([FromForm] UserAuthenticate model)
        {
            var token = GetJwtSecurityToken(model);
            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                expiration = token.ValidTo
            });
        }

        private JwtSecurityToken GetJwtSecurityToken(UserAuthenticate user)
        {
            //var userClaims = await _userManager.GetClaimsAsync(user);

            var identity = GetIdentity(user);
            if (identity == null)
                throw new UnauthorizedAccessException();

            return new JwtSecurityToken(
                issuer: Configuration["Tokens:Issuer"],
                audience: Configuration["Tokens:Issuer"],
                claims: GetTokenClaims(user, Configuration),
                expires: DateTime.UtcNow.AddMinutes(10),
                signingCredentials: new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Tokens:Key"])), SecurityAlgorithms.HmacSha256)
            );
        }

        private ClaimsIdentity GetIdentity(UserAuthenticate model)
        {
            // DON'T do this in production, obviously!
            if (model.Email == "jj@j.com" && model.Password == "test")
            {
                return new ClaimsIdentity(new System.Security.Principal.GenericIdentity(model.Email, "Token"), new Claim[] { });
            }

            // Credentials are invalid, or account doesn't exist
            return null;
        }

        private static IEnumerable<Claim> GetTokenClaims(UserAuthenticate user, IConfiguration Configuration)
        {
            return new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim(JwtRegisteredClaimNames.Email, user.Email)
            };
        }
    }
}