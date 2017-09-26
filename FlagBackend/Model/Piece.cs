using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
namespace FlagRush
{
    
    public class Piece
    {
        public int Id { get; set; }
        public int Row { get; set; }
        public int Col { get; set; }
        public int Rank { get; set; }
        public string Type { get; set; }
    }
}