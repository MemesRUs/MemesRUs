package com.MemesRUs.controllers;

import com.MemesRUs.entities.Meme;
import com.MemesRUs.entities.User;
import com.MemesRUs.services.MemeRepository;
import com.MemesRUs.services.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileOutputStream;

/**
 * Created by cameronoakley on 11/19/15.
 */
@RestController
public class MemeController {//test
    @Autowired
    MemeRepository memes;

    @Autowired
    UserRepository users;

    @RequestMapping("/files")
    public Iterable<Meme> getMemes(){
        return memes.findAll();
    }

     @RequestMapping("/upload")
    public void upload(HttpServletResponse response,
                       HttpSession session,
                       MultipartFile file,
                       String topText,
                       String bottomText,
                       int popularityRating
                       ) throws Exception {

        String username = (String) session.getAttribute("username");
        if (username == null){
         throw new Exception("You can't upload brah!");
        }
        File f = File.createTempFile("file", file.getOriginalFilename(), new File ("public"));
        FileOutputStream fos = new FileOutputStream(f);
        fos.write(file.getBytes());

        User user = users.findOneByUsername(username);
        Meme memeFile = new Meme();
        memeFile.originalName = file.getOriginalFilename();
        memeFile.generatedName = f.getName();
        memeFile.topText = topText;
        memeFile.bottomText = bottomText;
        memeFile.popularityRating = popularityRating;
        memeFile.user = user;
        memes.save(memeFile);
    }
    @RequestMapping("/edit-meme")
    public void editMeme(HttpSession session,
                           int id,
                           String topText,
                           String bottomText,
                           int popularityRating
                           ) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null){
            throw new Exception ("You can't edit brah!");
        }
        User user = users.findOne(id);
        Meme memeFile = new Meme();
        memeFile.topText = topText;
        memeFile.bottomText = bottomText;
        memeFile.popularityRating = popularityRating;
        memeFile.user = user;
        memes.save(memeFile);
    }
    @RequestMapping("/delete-meme")
    public void deleteMeme(HttpSession session,
                           int id) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null){
            throw new Exception ("You can't delete brah!");
        }
        memes.delete(id);
    }

    @RequestMapping("/logout")
    public void logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate();
    }
}


