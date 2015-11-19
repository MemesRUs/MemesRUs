package com.MemesRUs;

import com.MemesRUs.services.MemeRepository;
import com.MemesRUs.services.UserRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.junit.Assert.assertTrue;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = MemesRUsApplication.class)
@WebAppConfiguration
public class MemesRUsApplicationTests {
	@Autowired
	UserRepository userRepo;

	@Autowired
	MemeRepository memeRepo;

	@Autowired
	WebApplicationContext wap;

	MockMvc mockMvc;


	@Before
	public void before() {
		userRepo.deleteAll();
		memeRepo.deleteAll();
		mockMvc = MockMvcBuilders.webAppContextSetup(wap).build();
	}
	@Test
	public void loginTest() throws Exception {
		mockMvc.perform(
				MockMvcRequestBuilders.post("/login")
				.param("username", "TestUser")
				.param("password", "password")
		);
		assertTrue(userRepo.count() == 1);
	}
	@Test
	public void testCreateMeme() throws Exception {
		mockMvc.perform(
				MockMvcRequestBuilders.post("/create-meme")
					.param("topText", "LOLOL")
					.param("bottomText", "NOT SO FUNNY")
					.param("popularityRating", "10")
					.param("imageUrl", "www.LOL.com")
					.sessionAttr("username", "TestUser")
		);
		assertTrue(memeRepo.count() == 1);
	}

}
