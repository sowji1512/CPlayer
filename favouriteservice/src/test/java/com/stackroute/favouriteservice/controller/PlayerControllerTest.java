package com.stackroute.favouriteservice.controller;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.deser.DataFormatReaders.Match;
import com.stackroute.favouriteservice.domain.Player;
import com.stackroute.favouriteservice.service.PlayerService;

@RunWith(SpringRunner.class)
@WebMvcTest(PlayerController.class)

public class PlayerControllerTest {

	@Autowired
	private transient MockMvc mvc;

	@MockBean
	private transient PlayerService playerService;

	private transient Player player;

	@InjectMocks
	private PlayerController playerController;

	static List<Player> players;

	@Before
	public void setUp() {
		MockitoAnnotations.initMocks(this);

		mvc = MockMvcBuilders.standaloneSetup(playerController).build();
		players = new ArrayList<>();
		player = new Player(1, "sowji", "sowjanya",3,"sowjanya");
		
		
		
		players.add(player);
		player = new Player(1, "sai", "manoj",3,"sowjanya");
		players.add(player);
	}

	@Test
	public void testSaveNewPlayerSuccess() throws Exception {
		String token = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzb3dqYW55YSIsImlhdCI6MTU1MzA3MTQ2Mn0.tB2BdTUuETPoWt_hHje8N7wKRdjnAk5Z19j-ZCcsPFCYzJfsXEYNS-aRP5YjrRHQ";

		when(playerService.savePlayer(player)).thenReturn(true);
		mvc.perform(post("/api/v1/playerservice/player").header("authorization", "Bearer " + token)
				.contentType(MediaType.APPLICATION_JSON).content(jsonToString(player))).andExpect(status().isCreated());
		verify(playerService, times(1)).savePlayer(Mockito.any(Player.class));
		verifyNoMoreInteractions(playerService);
	}

	@Test
	public void testDeletePlayerById() throws Exception {
		when(playerService.deletePlayerById(1)).thenReturn(true);
		mvc.perform(delete("/api/v1/playerservice/player/{id}", 1)).andExpect(status().isOk());
		verify(playerService, times(1)).deletePlayerById(1);
		verifyNoMoreInteractions(playerService);
	}

	@Test
	public void testGetMyPlayers() throws Exception {
		String token = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzb3dqYW55YSIsImlhdCI6MTU1MzA3MTQ2Mn0.tB2BdTUuETPoWt_hHje8N7wKRdjnAk5Z19j-ZCcsPFCYzJfsXEYNS-aRP5YjrRHQ";
		when(playerService.getMyPlayers(("sowjanya"))).thenReturn(players);
		mvc.perform(get("/api/v1/playerservice/players").header("authorization", "Bearer " + token)
				.contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
		verify(playerService, times(1)).getMyPlayers("sowjanya");
		verifyNoMoreInteractions(playerService);
	}

	private String jsonToString(final Object object) {
		String result;
		try {
			final ObjectMapper mapper = new ObjectMapper();
			result = mapper.writeValueAsString(object);
		} catch (JsonProcessingException e) {
			result = "Json processing error";
		}
		return result;
	}

}
