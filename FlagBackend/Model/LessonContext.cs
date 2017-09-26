using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace FlagRush
{
    public class LessonContext : DbContext
    {
        public LessonContext(DbContextOptions<LessonContext> options) : base(options)
        {
        }
        public DbSet<GameState> GameState { get; set; }
        public DbSet<GameRoomItem> GameRoomItem { get; set; }

    }
}