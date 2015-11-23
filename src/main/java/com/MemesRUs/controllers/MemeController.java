package com.MemesRUs.controllers;

import com.MemesRUs.entities.Meme;
import com.MemesRUs.entities.User;
import com.MemesRUs.services.MemeRepository;
import com.MemesRUs.services.UserRepository;
import com.MemesRUs.utils.PasswordHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;


/**
 * Created by cameronoakley on 11/19/15.
 */
@RestController
public class MemeController {

    @Autowired
    MemeRepository memes;

    @Autowired
    UserRepository users;

    @PostConstruct
    public void init()
            throws IOException {
        if (memes.count() > 0) {
            return;
        }
        String topText = "Test";
        String bottomText = "Bottom test";
        int popularityRating = 1;

        Meme memeFileOne = new Meme();
        memeFileOne.topText = topText;
        memeFileOne.bottomText = bottomText;
        memeFileOne.popularityRating = popularityRating;
        memeFileOne.originalName = "baby meme.jpg";
        memeFileOne.generatedName = memeFileOne.originalName;
        memeFileOne.isBlank = true;
        memes.save(memeFileOne);

        Meme memeFileTwo = new Meme();
        memeFileTwo.topText = topText;
        memeFileTwo.bottomText = bottomText;
        memeFileTwo.popularityRating = popularityRating;
        memeFileTwo.originalName = "bad-luck-brian meme.png";
        memeFileTwo.generatedName = memeFileTwo.originalName;
        memeFileOne.isBlank = true;
        memes.save(memeFileTwo);

        Meme memeFileThree = new Meme();
        memeFileThree.topText = topText;
        memeFileThree.bottomText = bottomText;
        memeFileThree.popularityRating = popularityRating;
        memeFileThree.originalName = "family meme.jpg";
        memeFileThree.generatedName = memeFileThree.originalName;
        memeFileOne.isBlank = true;
        memes.save(memeFileThree);


        Meme memeFileFour = new Meme();
        memeFileFour.topText = topText;
        memeFileFour.bottomText = bottomText;
        memeFileFour.popularityRating = popularityRating;
        memeFileFour.originalName = "Futurama-Fry meme.jpg";
        memeFileFour.generatedName = memeFileFour.originalName;
        memeFileOne.isBlank = true;
        memes.save(memeFileFour);

        Meme memeFileFive = new Meme();
        memeFileFive.topText = topText;
        memeFileFive.bottomText = bottomText;
        memeFileFive.popularityRating = popularityRating;
        memeFileFive.originalName = "game of thrones meme.jpg";
        memeFileFive.generatedName = memeFileFive.originalName;
        memeFileOne.isBlank = true;
        memes.save(memeFileFive);

        Meme memeFileSix = new Meme();
        memeFileSix.topText = topText;
        memeFileSix.bottomText = bottomText;
        memeFileSix.popularityRating = popularityRating;
        memeFileSix.originalName = "gangster kid meme.jpg";
        memeFileSix.generatedName = memeFileSix.originalName;
        memeFileOne.isBlank = true;
        memes.save(memeFileSix);

        Meme memeFileSeven = new Meme();
        memeFileSeven.topText = topText;
        memeFileSeven.bottomText = bottomText;
        memeFileSeven.popularityRating = popularityRating;
        memeFileSeven.originalName = "little girl meme.png";
        memeFileSeven.generatedName = memeFileSeven.originalName;
        memeFileOne.isBlank = true;
        memes.save(memeFileSeven);

        Meme memeFileEight = new Meme();
        memeFileEight.topText = topText;
        memeFileEight.bottomText = bottomText;
        memeFileEight.popularityRating = popularityRating;
        memeFileEight.originalName = "scum bag.jpeg";
        memeFileEight.generatedName = memeFileEight.originalName;
        memeFileOne.isBlank = true;
        memes.save(memeFileEight);

        Meme memeFileNine = new Meme();
        memeFileNine.topText = topText;
        memeFileNine.bottomText = bottomText;
        memeFileNine.popularityRating = popularityRating;
        memeFileNine.originalName = "southpark meme.jpg";
        memeFileNine.generatedName = memeFileNine.originalName;
        memeFileOne.isBlank = true;
        memes.save(memeFileNine);

        Meme memeFileTen = new Meme();
        memeFileTen.topText = topText;
        memeFileTen.bottomText = bottomText;
        memeFileTen.popularityRating = popularityRating;
        memeFileTen.originalName = "star trek meme.jpg";
        memeFileTen.generatedName = memeFileTen.originalName;
        memeFileOne.isBlank = true;
        memes.save(memeFileTen);
    }

    @RequestMapping("/login")
    public void login(
                    HttpSession session,
                    String username,
                    String password
                    )throws Exception{
        session.setAttribute("username", username);
        User user = users.findOneByUsername(username);
        if (user == null){
        user = new User();
        user.username = username;
        user.password = PasswordHash.createHash(password);
        users.save(user);
        }
        else if (!PasswordHash.validatePassword(password, user.password)){
        throw new Exception ("Wrong password bruh!");
        }
    }

    @RequestMapping("/create-memes")
    public Page<Meme> createMemes(
                            HttpSession session,
                            @RequestBody Meme meme,
                            @RequestParam(defaultValue = "0") int page
                            )throws Exception{
        String username = (String) session.getAttribute("username");
        if (username == null){
        throw new Exception("You can't upload brah!");
        }

        PageRequest pageRequest = new PageRequest(page, 6);
        User user = users.findOneByUsername(username);
        meme.generatedName = meme.originalName;
        meme.user = user;
        meme.isBlank = false;
        memes.save(meme);
        return memes.findAllByUser(pageRequest, user);
    }

    @RequestMapping("/get-blank-memes")
    public Page getBlanks(
                    @RequestParam(defaultValue = "0") int page
                    ){
        PageRequest pageRequest = new PageRequest(page, 6);
        return memes.findByIsBlank(pageRequest, true);
    }

    @RequestMapping("/get-all-memes")
    public Page getAllMemes(
                        @RequestParam(defaultValue = "0") int page
                        ){
        PageRequest pageRequest = new PageRequest(page, 6);
        return memes.findByIsBlank(pageRequest, false);
    }

    @RequestMapping("/get-memes")
    public Page getMemes(
                    HttpSession session,
                    @RequestParam(defaultValue = "0") int page
                    )throws Exception{
        String username = (String) session.getAttribute("username");
        if (username == null){
            throw new Exception ("Not logged in HOMIE!");
        }
        PageRequest pageRequest = new PageRequest(page, 6);
        User user = users.findOneByUsername(username);
        return memes.findAllByUser(pageRequest, user);
    }

    @RequestMapping("/user-rating")
    public Page userRating(
                    HttpSession session,
                    @RequestParam(defaultValue = "0") int page
                    )throws Exception{
        String username = (String) session.getAttribute("username");
        if (username == null){
            throw new Exception ("Not logged in mann!");
        }
        PageRequest pageRequest = new PageRequest(page, 6);
        User user = users.findOneByUsername(username);
        return memes.findAllByPopularityRating(pageRequest, user);
    }

    @RequestMapping("/edit-meme")
    public void editMeme(
                    HttpSession session,
                    @RequestBody Meme meme
                    )throws Exception{
        String username = (String) session.getAttribute("username");
        if (username == null){
        throw new Exception ("You can't edit brah!");
        }
        meme.generatedName = meme.originalName;
        meme.user = users.findOneByUsername(username);
        memes.save(meme);
    }

    @RequestMapping("/delete-meme")
    public void deleteMeme(
                    HttpSession session,
                    int id
                    )throws Exception{
        String username = (String) session.getAttribute("username");
        if (username == null){
        throw new Exception ("You can't delete brah!");
        }
        memes.delete(id);
    }

    @RequestMapping("/logout")
    public void logout(
                    HttpServletRequest request){
        HttpSession session = request.getSession();
        session.invalidate();
    }
}


