using System.Collections.Generic;
namespace FlagRush
{
    public class GameRoomItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
        public string GameState {get; set;}
        public GameRoomItem()
        {
        }
    }
    
}