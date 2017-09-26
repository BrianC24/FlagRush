using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
namespace FlagRush
{
    public class GameState
    {
        public int Id { get; set;}

        [NotMapped]
        public Piece[,] Board { get; set; }
        public int PlayerTurn { get; set; }
        public int PlayerCount {get; set;}

        public bool IsGameOver { get; set;}

        public GameState()
        {

           
        }
    }

    
}