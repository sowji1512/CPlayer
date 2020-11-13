package com.stackroute.favouriteservice.service;

import java.util.List;

import com.stackroute.favouriteservice.domain.Player;
import com.stackroute.favouriteservice.exception.PlayerAlreadyExistsException;
import com.stackroute.favouriteservice.exception.PlayerNotFoundException;

public interface PlayerService {
	boolean savePlayer(Player player) throws PlayerAlreadyExistsException;
	boolean  deletePlayerById(int id) throws PlayerNotFoundException;
	Player getPlayerById(int id) throws PlayerNotFoundException;
	//Player getPlayerByName(String name) throws PlayerNotFoundException;
	List<Player> getMyPlayers(String userId);

}
