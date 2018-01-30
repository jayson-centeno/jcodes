using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Configuration;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using JCodes.Domain.Model.Authentication;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;

namespace JCodes
{
    [Route("api/[controller]")]
    public class TokenController : Controller
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        public IConfiguration Configuration { get; }


        public TokenController(IConfiguration configuration, SignInManager<ApplicationUser> signInManager)
        {
            Configuration = configuration;
            _signInManager = signInManager;
        }


        [EnableCors("*")]
        [AllowAnonymous]
        public async Task<IActionResult> Post([FromBody]UserAuthenticate model)
        {
            var token = await GetJwtSecurityToken(model);
            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                expiration = token.ValidTo
            });
        }

        private async Task<JwtSecurityToken> GetJwtSecurityToken(UserAuthenticate user)
        {
            var identity = await GetIdentity(user);
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

        private async Task<ClaimsIdentity> GetIdentity(UserAuthenticate model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);

            if (result.Succeeded)
                return new ClaimsIdentity(new System.Security.Principal.GenericIdentity(model.Email, "Token"), new Claim[]{ });

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