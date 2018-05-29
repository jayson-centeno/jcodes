using Microsoft.EntityFrameworkCore;

namespace JCLite.Database.Repositories
{
    public class JCLiteRepository : GenericRepository
    {
        public JCLiteRepository(DbContext context) : base(context)
        {
        }
    }
}
