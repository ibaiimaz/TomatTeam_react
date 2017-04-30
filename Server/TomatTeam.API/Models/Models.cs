using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TomatTeam.API.Models
{
    public class TomatTeamContext : DbContext
    {
        public TomatTeamContext(DbContextOptions<TomatTeamContext> options)
            : base(options)
        { }

        public DbSet<Team> Teams { get; set; }
        public DbSet<User> Users { get; set; }
    }

    public class Team
    {
        public int TeamId { get; set; }
        public string Name { get; set; }

        public List<User> Users { get; set; }
    }

    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }

        public int TeamId { get; set; }
        public Team Team { get; set; }
    }
}
