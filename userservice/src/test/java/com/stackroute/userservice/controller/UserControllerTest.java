package com.stackroute.userservice.controller;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.userservice.UserServiceApplication;
import com.stackroute.userservice.controller.UserController;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.repository.UserRepository;
import com.stackroute.userservice.services.SecurityTokenGenerator;
import com.stackroute.userservice.services.UserServiceImpl;



@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
@ContextConfiguration(classes=UserServiceApplication.class) 

public class UserControllerTest {
	@Autowired
	private MockMvc mockMvc;
	@MockBean
	private transient UserServiceImpl userService;
	@MockBean
	private SecurityTokenGenerator tokenGenerator;
	@MockBean
	private UserRepository userRepo;

	private  User user;
	@InjectMocks
	UserController usercontroller;
	@Before
	public void setup()
	{
		MockitoAnnotations.initMocks(this);

		user=new User("abc@gmail.com","sailu","gade","123");

	}
	
	@Test
	public void testforregisterUser() throws Exception {
		when(userService.saveUser(user)).thenReturn(true);
		mockMvc.perform(post("/api/v1/userservice/register").contentType(MediaType.APPLICATION_JSON).content(jsonToString(user)))
		.andExpect(status().isCreated()); 
		verify(userService,times(1)).saveUser(Mockito.any(User.class));

	}
	@Test
	public void testforLoginUser() throws Exception {
		String userId="abc@gmail.com";
		String password="123";
		when(userService.saveUser(user)).thenReturn(true);
		when(userService.findByUserIdAndPassword(userId, password)).thenReturn(user);

		mockMvc.perform(post("/api/v1/userservice/login").contentType(MediaType.APPLICATION_JSON).content(jsonToString(user)))
		.andExpect(status().isOk()); 
		verify(userService,times(1)).findByUserIdAndPassword(userId, password);

	}
//	@Test
//	public void testforEmptyEmail() throws Exception {
//		String userId="abc@gmail.com";
//		String password="123";
//		when(userService.saveUser(user)).thenReturn(true);
//		when(userService.findByEmailAndpassword(userId, password)).thenReturn(user);
//
//		mockMvc.perform(post("/api/user/login").contentType(MediaType.APPLICATION_JSON).content(jsonToString(user)))
//		.andExpect(status().isConflict()); 
//		verify(userService,times(1)).findByEmailAndpassword(userId, password);
//
//	}
	private static String jsonToString(User user)throws JsonProcessingException {
		String result;
		try
		{
			final ObjectMapper mapper=new ObjectMapper();
			final String jsoncontent=mapper.writeValueAsString(user);
			result=jsoncontent;
		}
		catch(JsonProcessingException exception)
		{
			result="json processing error";
		}
		return result;
	}
	
}
