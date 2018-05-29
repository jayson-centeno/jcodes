using JCLite.Domain.Model;
using Microsoft.EntityFrameworkCore;

namespace JCLite.Database.Context
{
    public class JCLiteDbContext: DbContext 
    {
        public JCLiteDbContext(DbContextOptions<JCLiteDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }

        public DbSet<Publication> Publications { get; set; }
    }
}
