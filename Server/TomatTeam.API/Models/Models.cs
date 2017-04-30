using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TomatTeam.API.Models;

namespace TomatTeam.API.Models
{
    public class TomatTeamContext : DbContext
    {
        public TomatTeamContext(DbContextOptions<TomatTeamContext> options)
            : base(options)
        { }

        public DbSet<Team> Teams { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<TomatTeam.API.Models.Pomodoro> Pomodoroes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Team>().ToTable("Team");
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Pomodoro>().ToTable("Pomodoro");
        }
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

    public class Pomodoro
    {
        public int PomodoroId { get; set; }
        public int UserId { get; set; }
        public DateTime StartTime { get; set; }

        public User User { get; set; }

    }
}
