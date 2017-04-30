using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using TomatTeam.API.Models;

namespace TomatTeam.API.Migrations
{
    [DbContext(typeof(TomatTeamContext))]
    [Migration("20170430143348_SingularizeTableNames")]
    partial class SingularizeTableNames
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("TomatTeam.API.Models.Pomodoro", b =>
                {
                    b.Property<int>("PomodoroId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("StartTime");

                    b.Property<int>("UserId");

                    b.HasKey("PomodoroId");

                    b.HasIndex("UserId");

                    b.ToTable("Pomodoro");
                });

            modelBuilder.Entity("TomatTeam.API.Models.Team", b =>
                {
                    b.Property<int>("TeamId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("TeamId");

                    b.ToTable("Team");
                });

            modelBuilder.Entity("TomatTeam.API.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<int>("TeamId");

                    b.HasKey("UserId");

                    b.HasIndex("TeamId");

                    b.ToTable("User");
                });

            modelBuilder.Entity("TomatTeam.API.Models.Pomodoro", b =>
                {
                    b.HasOne("TomatTeam.API.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TomatTeam.API.Models.User", b =>
                {
                    b.HasOne("TomatTeam.API.Models.Team", "Team")
                        .WithMany("Users")
                        .HasForeignKey("TeamId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
