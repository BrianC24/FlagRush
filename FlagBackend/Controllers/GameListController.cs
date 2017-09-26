using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace FlagRush.Controllers
{
    [Route("api/[controller]")]
    public class GameListController : Controller
    {
        private readonly LessonContext _context;

        public GameListController(LessonContext context)
        {
            _context = context;
        }
        // gets all the data from GameRoomItem Table : id , name, status, gamestate
        [HttpGet]
        public GameRoomItemList Get()
        {
            GameRoomItemList gameList = new GameRoomItemList();
            var query = from b in _context.GameRoomItem
                       select b;
            List<GameRoomItem> gameRoomList = new List<GameRoomItem>();
            foreach(var item in query)
            {
                GameRoomItem game = new GameRoomItem();
                game.Id = item.Id;
                game.Name = item.Name;
                game.Status = item.Status;
                gameRoomList.Add(game);
            }
            gameList.GamesList = gameRoomList;
            return gameList;
        }

        //gets a specific GameRoomItem from GameRoomItemList
        [HttpGet("getRoom")]
        public GameRoomItem GetGameRoomItem(int id)
        {
            var gameRoomItem = _context.GameRoomItem.Where(b => b.Id == id).FirstOrDefault(); 
            if(gameRoomItem == null)
            {
                return null;
            }
            return gameRoomItem;
        }

        // creates a new room if the the gameroom item has a gamestate of null
        [HttpPost("newRoom")]
        public void NewRoom([FromBody]GameRoomItem value)
        {
            value.Status = "Open";
            _context.GameRoomItem.Add(value);
            _context.SaveChanges();
        }

        //updates the current state of the board and stores it into the database
        [HttpPut("updateRoom")]
        public void updateRoom(int id, string gameState)
        {
            GameRoomItem item = _context.GameRoomItem.Where(b => b.Id == id).FirstOrDefault();
            
            if (item != null) {
                item.GameState = gameState;
                _context.SaveChanges();
            }
        }

    }
}