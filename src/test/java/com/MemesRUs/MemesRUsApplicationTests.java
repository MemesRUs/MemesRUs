package com.MemesRUs;

import com.MemesRUs.entities.Meme;
import com.MemesRUs.services.MemeRepository;
import com.MemesRUs.services.UserRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.List;

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
	public void testUpload() throws Exception {
		MockMultipartFile testFile = new MockMultipartFile("file", "test.jpg", "image/jpeg", "test img".getBytes());
		mockMvc.perform(
				MockMvcRequestBuilders.fileUpload("/upload")
				.file(testFile)
				.param("topText", "LOLOL")
				.param("bottomText", "NOT SO FUNNY")
				.param("popularityRating", "10")
				.sessionAttr("username", "TestUser")

		);
		assertTrue(memeRepo.count() == 1);
	}
	@Test
	public void testUserRatig() throws Exception {
		MockMultipartFile testFile = new MockMultipartFile("file", "test.jpg", "image/jpeg", "test img".getBytes());
		mockMvc.perform(
				MockMvcRequestBuilders.fileUpload("/upload")
				.file(testFile)
				.param("topText", "LOLOL")
				.param("bottomText", "NOT SO FUNNY")
				.param("popularityRating", "11")
				.sessionAttr("username", "TestUser")
		);
		assertTrue(memeRepo.count() == 1);
	}

	@Test
	public void testEdit() throws Exception {
		MockMultipartFile testFile = new MockMultipartFile("file", "test.jpg", "image/jpeg", "test img".getBytes());
		mockMvc.perform(
				MockMvcRequestBuilders.fileUpload("/upload")
				.file(testFile)
				.param("topText", "LOLOL")
				.param("bottomText", "NOT SO FUNNY")
				.param("popularityRating", "10")
				.sessionAttr("username", "TestUser")

		);
		List<Meme> memeList = (List<Meme>) memeRepo.findAll();
		mockMvc.perform(
				MockMvcRequestBuilders.fileUpload("/edit-meme")
				.file(testFile)
				.param("id", memeList.get(0).id + "")
				.param("topText", "NOT SO FUNNY")
				.param("bottomText", "LOLOL")
				.param("popularityRating", "15")
				.sessionAttr("username", "TestUser")
		);
		assertTrue(memeRepo.count() == 1);
	}

	@Test
	public void testDelete() throws Exception {
		MockMultipartFile testFile = new MockMultipartFile("file", "test.jpg", "image/jpeg", "test img".getBytes());
		mockMvc.perform(
				MockMvcRequestBuilders.fileUpload("/upload")
				.file(testFile)
				.param("topText", "NOT SO FUNNY")
				.param("bottomText", "LOLOL")
				.param("popularityRating", "15")
				.sessionAttr("username", "TestUser")
		);
		List<Meme> memeList = (List<Meme>) memeRepo.findAll();
		mockMvc.perform(
				MockMvcRequestBuilders.fileUpload("/delete-meme")
				.file(testFile)
				.param("id", memeList.get(0).id + "")
				.sessionAttr("username", "TestUser")

		);
		assertTrue(memeRepo.count() == 0);
	}
}
