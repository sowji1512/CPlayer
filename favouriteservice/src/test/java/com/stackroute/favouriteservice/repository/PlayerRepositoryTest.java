package com.stackroute.favouriteservice.repository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

import java.util.List;
import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.stackroute.favouriteservice.domain.Player;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)

public class PlayerRepositoryTest {

	@Autowired
	private transient PlayerRepository playerRepository;
	
	Player player;
	public void setRepo(PlayerRepository playerRepository) {
		this.playerRepository = playerRepository;
	}

	@Test
	public void testSavePlayer() throws Exception {
		player=new Player(1, "sowji", "sowjanya",3,"sowjanya");
		playerRepository.save(player);
		Player player1 = playerRepository.findById(player.getId());
		System.out.println(player1);
		assertThat(player1.getName()).isEqualTo("sowji");
	}
	
	@Test
	public void testDeletePlayer() throws Exception {
		player=new Player(1, "sowji", "sowjanya", 3,"sowjanya");
		playerRepository.save(player);
		System.out.println(player);
		Player player1 = playerRepository.getOne(1);
		playerRepository.delete(player1);
		assertEquals(null, playerRepository.findById(player1.getId()));
	}



	@Test
	public void testGetMyPlayers() throws Exception {
		playerRepository.save(new Player(1, "sowji", "sowjanya", 3,"sowjanya"));;
		playerRepository.save(new Player(2, "sai", "manoj",3,"sowjanya"));
		final List<Player> players = playerRepository.findByUserId("sowjanya");
		assertEquals("sowji", players.get(0).getName());
	}

}
